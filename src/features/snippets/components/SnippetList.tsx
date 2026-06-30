import { useEffect, useRef, useState } from "react";
import { useSnippetsStore } from "../store";
import type { Snippet } from "../types";
import { copyToClipboard } from "../utils";
import { useFilteredSnippets } from "../hooks/useFilteredSnippets";
import { SnippetFilters } from "./SnippetFilters";
import { SnippetForm } from "./SnippetForm";
import { SearchBar } from "./SearchBar";

export function SnippetList() {
  const deleteSnippet = useSnippetsStore((state) => state.deleteSnippet);
  const toggleFavorite = useSnippetsStore((state) => state.toggleFavorite);

  const [editingSnippetId, setEditingSnippetId] = useState<string | null>(null);
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    filtered,
    filters,
    availableLanguages,
    availableTags,
    setLanguage,
    setTag,
    toggleOnlyFavorites,
    setQuery,
    resetFilters,
  } = useFilteredSnippets();

  function getSnippetToEdit(snippet: Snippet) {
    return snippet.id === editingSnippetId;
  }

  async function handleCopy(snippet: Snippet) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const success = await copyToClipboard(snippet.code);

    if (!success) {
      return;
    }

    setCopiedSnippetId(snippet.id);

    timeoutRef.current = setTimeout(() => {
      setCopiedSnippetId(null);
    }, 2000);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="snippets-section">
      <h2>Snippets guardados</h2>

      <SearchBar query={filters.query} onQueryChange={setQuery} />

      <SnippetFilters
        filters={filters}
        availableLanguages={availableLanguages}
        availableTags={availableTags}
        onLanguageChange={setLanguage}
        onTagChange={setTag}
        onToggleFavorites={toggleOnlyFavorites}
        onReset={resetFilters}
      />

      {filtered.length === 0 ? (
        <p>No hay snippets que coincidan con los filtros.</p>
      ) : (
        <ul className="snippets-list">
          {filtered.map((snippet) => {
            const isEditing = getSnippetToEdit(snippet);
            return (
              <li className="snippet-card" key={snippet.id}>
                <article>
                  {isEditing ? (
                    <>
                      <h3>Editando: {snippet.title}</h3>
                      <SnippetForm
                        snippetToEdit={snippet}
                        onFinishEditing={() => setEditingSnippetId(null)}
                      />
                      <button
                        type="button"
                        onClick={() => setEditingSnippetId(null)}
                      >
                        Cancelar edición
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="snippet-card-header">
                        <h3>{snippet.title}</h3>
                        <p>{snippet.favorite ? "Favorito" : "No favorito"}</p>
                      </div>
                      <p>{snippet.description}</p>
                      <p>Lenguaje: {snippet.language}</p>
                      <pre>
                        <code>{snippet.code}</code>
                      </pre>
                      {snippet.tags.length > 0 && (
                        <p>Etiquetas: {snippet.tags.join(", ")}</p>
                      )}
                      <div className="snippet-actions">
                        {/* Botón Copiar con feedback visual dinámico */}
                        <button
                          type="button"
                          onClick={() => handleCopy(snippet)}
                          className={copiedSnippetId === snippet.id ? "copied" : ""}
                        >
                          {copiedSnippetId === snippet.id ? "¡Copiado!" : "Copiar"}
                        </button>

                        <button
                          type="button"
                          onClick={() => setEditingSnippetId(snippet.id)}
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleFavorite(snippet.id)}
                        >
                          {snippet.favorite ? "Quitar favorito" : "Marcar favorito"}
                        </button>
                        <button
                          type="button"
                          onClick={() => deleteSnippet(snippet.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </>
                  )}
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}