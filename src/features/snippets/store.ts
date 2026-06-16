import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Snippet } from "./types";

type SnippetsStore = {
  snippets: Snippet[];
  addSnippet: (snippet: Snippet) => void;
  updateSnippet: (id: string, updatedSnippet: Partial<Snippet>) => void;
  deleteSnippet: (id: string) => void;
  toggleFavorite: (id: string) => void;
};

export const useSnippetsStore = create<SnippetsStore>()(
  persist(
    (set) => ({
      snippets: [],

      addSnippet: (snippet) =>
        set((state) => ({
          snippets: [...state.snippets, snippet],
        })),

     updateSnippet: (id, updatedSnippet) =>
        set((state) => ({
          snippets: state.snippets.map((snippet) =>
           snippet.id === id
             ? { ...snippet, ...updatedSnippet, updatedAt: new Date().toISOString() }
             : snippet
    ),
  })),
      deleteSnippet: (id) =>
        set((state) => ({
          snippets: state.snippets.filter((snippet) => snippet.id !== id),
        })),

      toggleFavorite: (id) =>
        set((state) => ({
          snippets: state.snippets.map((snippet) =>
            snippet.id === id
              ? { ...snippet, favorite: !snippet.favorite }
              : snippet
          ),
        })),
    }),
    {
      name: "snippets-storage",
    }
  )
);