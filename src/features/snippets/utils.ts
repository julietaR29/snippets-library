import type { Snippet, SnippetFormData } from "./types";

// Agarrá un texto de etiquetas separado por comas, separalo en partes,
// limpiá los espacios y sacá las partes vacías.
export function normalizeTags(tags: string): string[] {
  return tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

export function createSnippetFromForm(data: SnippetFormData): Snippet {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    title: data.title.trim(),
    language: data.language.trim(),
    code: data.code.trim(),
    description: data.description.trim(),
    tags: normalizeTags(data.tags),
    favorite: false,
    createdAt: now,
    updatedAt: now,
  };
}

export function updateSnippetFromForm(
  snippet: Snippet,
  data: SnippetFormData
): Snippet {
  return {
    ...snippet,
    title: data.title.trim(),
    language: data.language.trim(),
    code: data.code.trim(),
    description: data.description.trim(),
    tags: normalizeTags(data.tags),
    updatedAt: new Date().toISOString(),
  };
}