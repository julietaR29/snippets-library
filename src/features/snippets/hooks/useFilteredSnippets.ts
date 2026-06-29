import { useState, useMemo } from "react";
import { useSnippetsStore } from "../store";
import type { Snippet } from "../types";

export type FilterState = {
  language: string;
  tag: string;
  onlyFavorites: boolean;
  query: string;
};

export function useFilteredSnippets() {
  const snippets = useSnippetsStore((state) => state.snippets);

  const [filters, setFilters] = useState<FilterState>({
    language: "",
    tag: "",
    onlyFavorites: false,
    query: "",
  });

  const availableLanguages = useMemo(
    () => [...new Set(snippets.map((s) => s.language).filter(Boolean))],
    [snippets]
  );

  const availableTags = useMemo(
    () => [...new Set(snippets.flatMap((s) => s.tags).filter(Boolean))],
    [snippets]
  );

  const filtered = useMemo(() => {
    return snippets.filter((snippet: Snippet) => {
      if (filters.language && snippet.language !== filters.language) return false;
      if (filters.tag && !snippet.tags.includes(filters.tag)) return false;
      if (filters.onlyFavorites && !snippet.favorite) return false;
      return true;
    });
  }, [snippets, filters]);

  function setLanguage(language: string) {
    setFilters((prev) => ({ ...prev, language }));
  }

  function setTag(tag: string) {
    setFilters((prev) => ({ ...prev, tag }));
  }

  function toggleOnlyFavorites() {
    setFilters((prev) => ({ ...prev, onlyFavorites: !prev.onlyFavorites }));
  }

  function resetFilters() {
    setFilters({ language: "", tag: "", onlyFavorites: false });
  }

  return {
    filtered,
    filters,
    availableLanguages,
    availableTags,
    setLanguage,
    setTag,
    toggleOnlyFavorites,
    resetFilters,
  };
}