# Biblioteca de Snippets de Código

Aplicación web desarrollada como proyecto integrador del módulo de React.

La aplicación permite crear, organizar y administrar fragmentos de código (snippets) de distintos lenguajes de programación mediante una interfaz desarrollada con React, TypeScript y Vite, ofreciendo una experiencia rápida, intuitiva y orientada a la reutilización de código.

---

# Vista previa

![Vista de la aplicación](./public/screenshot.png)

---

# Idea elegida

**Idea 16 — Biblioteca de Snippets de Código**

El objetivo del proyecto es ofrecer una biblioteca personal donde el usuario pueda almacenar, editar, buscar, filtrar y reutilizar fragmentos de código de forma sencilla y organizada.

---

# Funcionalidades

- Creación de nuevos snippets.
- Edición de snippets existentes.
- Eliminación de snippets.
- Marcado y desmarcado de favoritos.
- Filtrado por lenguaje.
- Filtrado por etiquetas.
- Visualización exclusiva de favoritos.
- Búsqueda reactiva en tiempo real mediante estados controlados.
- Integración con la **Async Clipboard API** para copiar únicamente el código del snippet al portapapeles.
- Resaltado de sintaxis para múltiples lenguajes de programación.
- Persistencia automática de los datos mediante **Zustand Persist** y **Local Storage**.

---

# Tecnologías utilizadas

- React 19
- TypeScript
- Vite
- React Router
- Zustand
- CSS
- Async Clipboard API
- highlight.js
- Local Storage

---

# Arquitectura

El proyecto sigue una arquitectura **Feature-First**, organizando cada funcionalidad dentro de su propio módulo para favorecer el mantenimiento, la escalabilidad y el trabajo colaborativo.

```text
src/
│
├── app/
│   ├── providers.tsx
│   └── router.tsx
│
├── features/
│   └── snippets/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── store.ts
│       ├── types.ts
│       └── utils.ts
│
└── shared/
```

> 💡 **Nota sobre la arquitectura:** Se eligió el enfoque **Feature-First** porque centraliza componentes, hooks, tipos y utilidades dentro de `features/snippets`. Esto reduce el acoplamiento entre módulos, facilita el trabajo colaborativo y permite escalar la aplicación agregando nuevas funcionalidades sin afectar la estructura existente.

---

# Instalación

Clonar el repositorio:

```bash
git clone https://github.com/julietaR29/snippets-library.git
```

Ingresar al proyecto:

```bash
cd snippets-library
```

Instalar dependencias:

```bash
pnpm install
```

Iniciar el servidor de desarrollo:

```bash
pnpm dev
```

Generar la versión de producción:

```bash
pnpm build
```

Ejecutar el análisis estático del código:

```bash
pnpm lint
```

---

## Equipo de Desarrollo

| Integrante | Alcance | Responsabilidad |
|------------|:-------:|-----------------|
| **Julieta Rodríguez** | **D1** | Configuración inicial del proyecto y estructura base. |
| **Carolina Pally** | **D2** | Filtros por lenguaje, etiquetas y favoritos. |
| **Agustín Quintana** | **D3** | Funcionalidad de copiado al portapapeles con feedback visual. |
| **Guillermina Gatti** | **D4** | Búsqueda de snippets por palabra clave. |
| **Lucas Laurido** | **D5** | Resaltado de sintaxis (Syntax Highlight). |

---

# Futuras mejoras

- Implementación de modo oscuro (Dark Mode).
- Organización de snippets mediante carpetas o colecciones.
- Sincronización con una base de datos externa (Firebase o Supabase).
- Exportación e importación de snippets.
- Compartir snippets mediante enlaces.
- Historial de modificaciones.
- Búsqueda avanzada.
- Soporte para nuevos lenguajes de programación.

---

# Estado del proyecto

**Proyecto integrador finalizado.**

Todos los alcances definidos para la primera entrega (**D1 a D5**) fueron implementados e integrados en una única aplicación funcional.

# Links

- Repositorio: https://github.com/julietaR29/snippets-library
- Deploy: pendiente
---