import { useCallback, useEffect, useRef, useState } from 'react';
import MiniSearch, { type SearchResult } from 'minisearch';
import type { SearchDocument, SearchType } from '@/data/searchRecords';

interface SearchFilters {
  types?: SearchType[];
  tags?: string[];
}

interface SearchResultItem extends SearchDocument {
  score: number;
}

const SEARCH_INDEX_PATH = '/search-index.json';
const INDEX_VERSION = import.meta.env?.VITE_APP_VERSION ?? '';

const createMiniSearch = (docs: SearchDocument[]) => {
  const instance = new MiniSearch<SearchDocument>({
    fields: ['title', 'summary', 'content', 'tags', 'section'],
    storeFields: ['id', 'title', 'summary', 'path', 'type', 'tags', 'section', 'updatedAt'],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
    },
  });

  instance.addAll(docs);
  return instance;
};

export const useSearch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [docs, setDocs] = useState<SearchDocument[]>([]);
  const [miniSearch, setMiniSearch] = useState<MiniSearch<SearchDocument> | null>(null);
  const docsRef = useRef<SearchDocument[]>([]);
  const docMapRef = useRef<Record<string, SearchDocument>>({});

  const ensureIndex = useCallback(async () => {
    if (miniSearch || loading) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const url = INDEX_VERSION ? `${SEARCH_INDEX_PATH}?v=${INDEX_VERSION}` : SEARCH_INDEX_PATH;
      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`Unable to load search index (${response.status})`);
      }
      const docs = (await response.json()) as SearchDocument[];
      docsRef.current = docs;
      setDocs(docs);
      docMapRef.current = Object.fromEntries(docs.map((doc) => [doc.id, doc]));

      const instance = createMiniSearch(docs);
      setMiniSearch(instance);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Search index failed to load.';
      setError(message);

      // Lightweight fallback: build a minimal index from whatever docs we already have
      if (!miniSearch && docsRef.current.length) {
        const instance = createMiniSearch(docsRef.current);
        setMiniSearch(instance);
      }
    } finally {
      setLoading(false);
    }
  }, [miniSearch, loading]);

  useEffect(() => {
    void ensureIndex();
  }, [ensureIndex]);

  const search = useCallback(
    (query: string, filters?: SearchFilters): SearchResultItem[] => {
      const trimmed = query.trim();
      const docs = docsRef.current;
      const parseDate = (value?: string) => (value ? new Date(value).getTime() : 0);

      const matchesFilters = (doc: SearchDocument) => {
        if (filters?.types?.length && !filters.types.includes(doc.type)) {
          return false;
        }
        if (filters?.tags?.length) {
          const docTags = doc.tags ?? [];
          const hasAllTags = filters.tags.every((tag) => docTags.includes(tag));
          if (!hasAllTags) {
            return false;
          }
        }
        return true;
      };

      if (!trimmed || !miniSearch) {
        return docs.filter(matchesFilters).slice(0, 20).map((doc) => ({ ...doc, score: 0 }));
      }

      let rawResults = miniSearch.search(trimmed, { combineWith: 'AND' }) as SearchResult[];
      if (!rawResults.length) {
        rawResults = miniSearch.search(trimmed, { combineWith: 'OR' }) as SearchResult[];
      }

      return rawResults
        .map((result) => {
          const doc = docMapRef.current[result.id];
          return doc ? { ...doc, score: result.score ?? 0 } : null;
        })
        .filter((item): item is SearchResultItem => Boolean(item))
        .filter(matchesFilters)
        .sort((a, b) => {
          if (b.score !== a.score) {
            return b.score - a.score;
          }
          return parseDate(b.updatedAt) - parseDate(a.updatedAt);
        });
    },
    [miniSearch]
  );

  return {
    loading,
    error,
    docs,
    search,
    ensureIndex,
  };
};
