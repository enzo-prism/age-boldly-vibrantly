import React, { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search as SearchIcon, Loader2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Seo from '@/components/seo/Seo';
import { getSeoRouteByPath } from '@/data/seoRoutes';
import type { SearchType } from '@/data/searchRecords';
import { useSearch } from '@/hooks/useSearch';

const typeFilters: Array<{ type: SearchType; label: string }> = [
  { type: 'page', label: 'Pages' },
  { type: 'pillar', label: 'Pillars' },
  { type: 'blog', label: 'Blog' },
  { type: 'video', label: 'Video' },
  { type: 'resource', label: 'Resources' },
];

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(initialQuery);
  const [selectedTypes, setSelectedTypes] = useState<SearchType[]>([]);
  const { search, loading, error, ensureIndex } = useSearch();

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    void ensureIndex();
  }, [ensureIndex]);

  const seoConfig = getSeoRouteByPath('/search');

  const results = useMemo(
    () => search(query, { types: selectedTypes.length ? selectedTypes : undefined }),
    [query, search, selectedTypes]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = query.trim();
    setSearchParams(trimmed ? { q: trimmed } : {});
  };

  const toggleType = (type: SearchType) => {
    setSelectedTypes((current) =>
      current.includes(type) ? current.filter((item) => item !== type) : [...current, type]
    );
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      {seoConfig && (
        <Seo title={seoConfig.title} description={seoConfig.description} canonicalPath={seoConfig.path} />
      )}
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.28em] text-teal font-semibold">Search</p>
          <h1 className="text-4xl font-bold leading-tight">Find pillars, nutrition, blog posts, and resources</h1>
          <p className="text-muted-foreground max-w-3xl">
            Start typing to search everything on Rebellious Aging. Use filters to narrow down by content type.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search blog, pillars, nutrition guide, video series…"
              className="pl-10 h-12 text-base"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {typeFilters.map((filter) => (
              <Badge
                key={filter.type}
                variant={selectedTypes.includes(filter.type) ? 'default' : 'outline'}
                className="cursor-pointer px-3 py-1"
                onClick={() => toggleType(filter.type)}
              >
                {filter.label}
              </Badge>
            ))}
            <Button
              variant="ghost"
              type="button"
              onClick={() => setSelectedTypes([])}
              className="text-sm"
            >
              Clear filters
            </Button>
          </div>
          <Button type="submit" className="hidden">Search</Button>
        </form>

        {loading && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading search results…
          </div>
        )}

        {error && <div className="text-destructive text-sm">{error}</div>}

        {!loading && !error && (
          <div className="space-y-4">
            {results.length === 0 ? (
              <div className="border rounded-2xl p-6 bg-muted/20">
                <p className="font-semibold mb-2">No results yet</p>
                <p className="text-muted-foreground mb-4">
                  Try a different keyword like &quot;nutrition guide&quot;, &quot;confidence&quot;, or &quot;video&quot;.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">nutrition</Badge>
                  <Badge variant="outline">confidence</Badge>
                  <Badge variant="outline">gratitude</Badge>
                  <Badge variant="outline">video</Badge>
                  <Badge variant="outline">plant-based</Badge>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Showing {results.length} result{results.length === 1 ? '' : 's'}
                </p>
                {results.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="block border rounded-2xl p-4 hover:border-teal transition-colors bg-white shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <Badge variant="secondary" className="capitalize">
                        {item.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : 'Updated'}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-muted-foreground line-clamp-2">{item.summary}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
