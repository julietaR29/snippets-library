import { useState } from "react";
import { useSnippetsStore } from "../store";
import type { Snippet } from "../types";
import { SnippetForm } from "./SnippetForm";
import { SnippetFilters } from "./SnippetFilters";
import { useFilteredSnippets } from "../hooks/useFilteredSnippets";

export function SnippetList() {
  const deleteSnippet = useSnippetsStore((state) => state.deleteSnippet);
  const toggleFavorite = useSnippetsStore((state) => state.toggleFavorite);
  const [editingSnippetId, setEditingSnippetId] = useState<string | null>(null);

  const {
    filtered,
    filters,
    availableLanguages,
    availableTags,
    setLanguage,
    setTag,
    toggleOnlyFavorites,
    resetFilters,
  } = useFilteredSnippets();

  function getSnippetToEdit(snippet: Snippet) {
    return snippet.id === editingSnippetId;
  }

  return (
    <section className="snippets-section">
      <h2>Snippets guardados</h2>

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