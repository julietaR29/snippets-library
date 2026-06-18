import type { FilterState } from "../hooks/useFilteredSnippets";

type Props = {
  filters: FilterState;
  availableLanguages: string[];
  availableTags: string[];
  onLanguageChange: (value: string) => void;
  onTagChange: (value: string) => void;
  onToggleFavorites: () => void;
  onReset: () => void;
};

export function SnippetFilters({
  filters,
  availableLanguages,
  availableTags,
  onLanguageChange,
  onTagChange,
  onToggleFavorites,
  onReset,
}: Props) {
  return (
    <div className="snippet-filters">
      <select
        value={filters.language}
        onChange={(e) => onLanguageChange(e.target.value)}
        aria-label="Filtrar por lenguaje"
      >
        <option value="">Todos los lenguajes</option>
        {availableLanguages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

      <select
        value={filters.tag}
        onChange={(e) => onTagChange(e.target.value)}
        aria-label="Filtrar por etiqueta"
      >
        <option value="">Todas las etiquetas</option>
        {availableTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <label>
        <input
          type="checkbox"
          checked={filters.onlyFavorites}
          onChange={onToggleFavorites}
        />
        Solo favoritos
      </label>

      <button type="button" onClick={onReset}>
        Limpiar filtros
      </button>
    </div>
  );
}