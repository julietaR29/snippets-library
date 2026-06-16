import { useState } from "react";
import type { FormEvent } from "react";
import { useSnippetsStore } from "../store";
import type { SnippetFormData } from "../types";
import { createSnippetFromForm } from "../utils";

const initialFormData: SnippetFormData = {
  title: "",
  language: "",
  code: "",
  description: "",
  tags: "",
};

export function SnippetForm() {
  const addSnippet = useSnippetsStore((state) => state.addSnippet);
  const [formData, setFormData] = useState<SnippetFormData>(initialFormData);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newSnippet = createSnippetFromForm(formData);

    addSnippet(newSnippet);
    setFormData(initialFormData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Título
        <input
          type="text"
          value={formData.title}
          onChange={(event) =>
            setFormData({ ...formData, title: event.target.value })
          }
        />
      </label>

      <label>
        Lenguaje
        <input
          type="text"
          value={formData.language}
          onChange={(event) =>
            setFormData({ ...formData, language: event.target.value })
          }
        />
      </label>

      <label>
        Descripción
        <textarea
          value={formData.description}
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        />
      </label>

      <label>
        Código
        <textarea
          value={formData.code}
          onChange={(event) =>
            setFormData({ ...formData, code: event.target.value })
          }
        />
      </label>

      <label>
        Etiquetas separadas por coma
        <input
          type="text"
          value={formData.tags}
          onChange={(event) =>
            setFormData({ ...formData, tags: event.target.value })
          }
        />
      </label>

      <button type="submit">Guardar snippet</button>
    </form>
  );
}