type Props = {
  query: string;
  onQueryChange: (value: string) => void;
};

export function SearchBar({ query, onQueryChange }: Props) {
  return (
    <div className="search-bar">
      <label htmlFor="snippet-search" className="search-bar__label">
        Buscar snippets
      </label>
      <div className="search-bar__input-wrapper">
        <input
          id="snippet-search"
          type="search"
          placeholder="Buscar por título, descripción, código o etiqueta..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          className="search-bar__input"
        />
      </div>
    </div>
  );
} 