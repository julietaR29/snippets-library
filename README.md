# Biblioteca de Snippets de Código

Proyecto integrador del módulo de React.  
Aplicación SPA para guardar y administrar snippets de código reutilizables.

## Idea elegida

Idea 16: Biblioteca de Snippets de Código.

## Alcance de D1

Esta rama implementa la base del proyecto:

- Scaffold con React, TypeScript y Vite.
- Configuración de React Router.
- Arquitectura feature-first.
- Modelo de datos de snippets.
- Store global con Zustand.
- Persistencia en localStorage mediante Zustand persist.
- CRUD base de snippets:
  - crear
  - listar
  - editar
  - eliminar
- Marcado de snippet favorito.
- Validación mínima del formulario.

No incluye:

- Filtros por lenguaje, etiqueta o favoritos.
- Copiar snippets al portapapeles.
- Búsqueda por palabra clave.
- Resaltado de sintaxis.

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
      pages/
      store.ts
      types.ts
      utils.ts
  shared/
