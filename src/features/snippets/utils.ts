

//Agarrá un texto de etiquetas separado por comas, separalo en partes, limpiá los espacios y sacá las partes vacías.
export function normalizeTags(tags: string): string[] {
  return tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

