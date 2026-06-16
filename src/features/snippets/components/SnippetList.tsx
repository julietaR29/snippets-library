import { useSnippetsStore } from "../store";

export function SnippetList() {
  const snippets = useSnippetsStore((state) => state.snippets);
  const deleteSnippet = useSnippetsStore((state) => state.deleteSnippet);
  const toggleFavorite = useSnippetsStore((state) => state.toggleFavorite);

  if (snippets.length === 0) {
    return <p>Todavía no hay snippets guardados.</p>;
  }

  return (
    <section>
      <h2>Snippets guardados</h2>

      <ul>
        {snippets.map((snippet) => (
          <li key={snippet.id}>
            <article>
              <h3>{snippet.title}</h3>
              <p>{snippet.description}</p>
              <p>Lenguaje: {snippet.language}</p>

              <pre>
                <code>{snippet.code}</code>
              </pre>

              {snippet.tags.length > 0 && (
                <p>Etiquetas: {snippet.tags.join(", ")}</p>
              )}

              <p>{snippet.favorite ? "Favorito" : "No favorito"}</p>

              <button type="button" onClick={() => toggleFavorite(snippet.id)}>
                {snippet.favorite ? "Quitar favorito" : "Marcar favorito"}
              </button>

              <button type="button" onClick={() => deleteSnippet(snippet.id)}>
                Eliminar
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}