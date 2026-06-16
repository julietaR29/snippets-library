import { useSnippetsStore } from "../store";

export function SnippetList() {
  const snippets = useSnippetsStore((state) => state.snippets);
  const deleteSnippet = useSnippetsStore((state) => state.deleteSnippet);
  const toggleFavorite = useSnippetsStore((state) => state.toggleFavorite);

  if (snippets.length === 0) {
    return <p>Todavía no hay snippets guardados.</p>;
  }

  return (
    <section className="snippets-section">
      <h2>Snippets guardados</h2>

      <ul className="snippets-list">
        {snippets.map((snippet) => (
          <li className="snippet-card" key={snippet.id}>
            <article>
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
                  onClick={() => toggleFavorite(snippet.id)}
                >
                  {snippet.favorite ? "Quitar favorito" : "Marcar favorito"}
                </button>

                <button type="button" onClick={() => deleteSnippet(snippet.id)}>
                  Eliminar
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}