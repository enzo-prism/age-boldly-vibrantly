import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Search as SearchIcon, X } from 'lucide-react';

import type { SearchDocument, SearchType } from '@/data/searchRecords';
import { useSearch } from '@/hooks/useSearch';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SearchDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  renderTrigger?: (open: () => void) => React.ReactNode;
}

const typeLabel: Record<SearchType, string> = {
  page: 'Pages',
  pillar: 'Pillars',
  blog: 'Blog',
  video: 'Video',
  resource: 'Resources',
};

const typeEmoji: Record<SearchType, string> = {
  page: '📄',
  pillar: '🏛️',
  blog: '📝',
  video: '🎥',
  resource: '📚',
};

interface ResultGroup {
  type: SearchType;
  items: SearchDocument[];
}

export const SearchDialog: React.FC<SearchDialogProps> = ({
  open,
  onOpenChange,
  renderTrigger,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const resolvedOpen = open ?? internalOpen;
  const setOpen = onOpenChange ?? setInternalOpen;
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { search, docs, loading, error, ensureIndex } = useSearch();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const results = useMemo(() => search(query), [query, search]);

  const groupedResults: ResultGroup[] = useMemo(() => {
    const groups: Record<SearchType, SearchDocument[]> = {
      page: [],
      pillar: [],
      blog: [],
      video: [],
      resource: [],
    };

    results.forEach((item) => {
      groups[item.type]?.push(item);
    });

    return Object.entries(groups)
      .filter(([, items]) => items.length > 0)
      .map(([type, items]) => ({ type: type as SearchType, items }));
  }, [results]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen(true);
        void ensureIndex();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [ensureIndex, setOpen]);

  useEffect(() => {
    if (!resolvedOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [resolvedOpen]);

  const handleSelect = (item: SearchDocument) => {
    setOpen(false);
    setQuery('');
    navigate(item.path);
  };

  const quickLinks = docs.slice(0, 6);

  const trigger = renderTrigger ? renderTrigger(() => setOpen(true)) : null;

  return (
    <>
      {trigger}
      <CommandDialog
        open={resolvedOpen}
        onOpenChange={setOpen}
        hideCloseButton
        contentClassName="w-[min(100vw-1.5rem,720px)] max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-4rem)] rounded-2xl sm:rounded-xl border border-border"
      >
        <div className="flex items-center justify-between px-3 py-2 border-b">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <SearchIcon className="h-4 w-4" />
            <span>Search pillars, nutrition, blog, videos</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <CommandInput
          ref={inputRef}
          value={query}
          onValueChange={(value) => {
            setQuery(value);
            void ensureIndex();
          }}
          placeholder="Search pillars, nutrition, blog, or videos..."
        />
        <CommandList className="max-h-[calc(100vh-10rem)] sm:max-h-[500px]">
          {loading && (
            <div className="flex items-center gap-2 p-4 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading search index…
            </div>
          )}
          {error && (
            <CommandEmpty>
              <div className="space-y-2">
                <p className="font-semibold text-destructive">Search is unavailable.</p>
                <p className="text-sm text-muted-foreground">Check your connection or try again.</p>
              </div>
            </CommandEmpty>
          )}
          {!loading && !error && (
            <>
              <CommandEmpty>
                {query ? 'No matches found.' : 'Start typing to search or use a quick link.'}
              </CommandEmpty>
              {groupedResults.map((group, index) => (
                <React.Fragment key={group.type}>
                  {index > 0 && <CommandSeparator />}
                  <CommandGroup heading={`${typeEmoji[group.type]} ${typeLabel[group.type]}`}>
                    {group.items.map((item) => (
                      <CommandItem key={item.id} onSelect={() => handleSelect(item)}>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{item.title}</span>
                            {item.tags?.length ? (
                              <Badge variant="secondary" className="text-xs capitalize">
                                {item.tags[0]}
                              </Badge>
                            ) : null}
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">{item.summary}</p>
                        </div>
                        <CommandShortcut>{typeLabel[item.type]}</CommandShortcut>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </React.Fragment>
              ))}
              {!query && groupedResults.length === 0 && quickLinks.length > 0 && (
                <CommandGroup heading="⭐ Featured">
                  {quickLinks.map((item) => (
                    <CommandItem key={item.id} onSelect={() => handleSelect(item)}>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{item.title}</span>
                          <Badge variant="secondary" className="text-xs capitalize">
                            {typeLabel[item.type]}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">{item.summary}</p>
                      </div>
                      <CommandShortcut>{typeEmoji[item.type]}</CommandShortcut>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </>
          )}
        </CommandList>
        <div className="flex items-center justify-between px-4 py-2 border-t text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <SearchIcon className="h-4 w-4" />
            <span>Search pillars, nutrition, blog, resources, and videos</span>
          </div>
          <div className="hidden sm:flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-muted">⌘</kbd>
            <kbd className="px-1.5 py-0.5 rounded bg-muted">K</kbd>
          </div>
        </div>
      </CommandDialog>
    </>
  );
};
