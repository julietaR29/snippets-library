# Biblioteca de Snippets de Código

Proyecto integrador del módulo de React.  
Aplicación SPA para guardar y administrar snippets de código reutilizables.

## Idea elegida

Idea 16: Biblioteca de Snippets de Código.

## Alcance de D4

Esta rama implementa la búsqueda por palabra clave:

- Input de búsqueda en tiempo real.
- Búsqueda dentro del título, descripción, código y etiquetas.
- Botón para limpiar la búsqueda con un clic.
- Mensaje contextual cuando no hay resultados.
- Compatible con los filtros del D2 (lenguaje, etiqueta, favoritos).

## Tecnologías

- React 19
- TypeScript
- Vite
- React Router
- Zustand
- CSS

## Estructura del proyecto

```txt
src/
  app/
    providers.tsx
    router.tsx
  features/
    snippets/
      components/
        SearchBar.tsx
        SnippetFilters.tsx
        SnippetForm.tsx
        SnippetList.tsx
      hooks/
        useFilteredSnippets.ts
      pages/
        SnippetsPage.tsx
      store.ts
      types.ts
      utils.ts
  shared/
```