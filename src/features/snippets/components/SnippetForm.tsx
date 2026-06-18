import { useState, type FormEvent } from "react";
import { useSnippetsStore } from "../store";
import type { Snippet, SnippetFormData } from "../types";
import { createSnippetFromForm, updateSnippetFromForm, validateSnippetForm, } from "../utils";

type SnippetFormProps = {
    snippetToEdit?: Snippet;
    onFinishEditing?: () => void;
};

const initialFormData: SnippetFormData = {
    title: "",
    language: "",
    code: "",
    description: "",
    tags: "",
};

function getInitialFormData(snippet?: Snippet): SnippetFormData {
    if (!snippet) {
        return initialFormData;
    }

    return {
        title: snippet.title,
        language: snippet.language,
        code: snippet.code,
        description: snippet.description,
        tags: snippet.tags.join(", "),
    };
}

export function SnippetForm({
    snippetToEdit,
    onFinishEditing,
}: SnippetFormProps) {
    const addSnippet = useSnippetsStore((state) => state.addSnippet);
    const updateSnippet = useSnippetsStore((state) => state.updateSnippet);

    const [formData, setFormData] = useState<SnippetFormData>(
        getInitialFormData(snippetToEdit)
    );

    const [error, setError] = useState<string | null>(null);

    const isEditing = Boolean(snippetToEdit);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const validationError = validateSnippetForm(formData);

        if (validationError) {
            setError(validationError);
            return;
        }

        setError(null);

        if (snippetToEdit) {
            const updatedSnippet = updateSnippetFromForm(snippetToEdit, formData);

            updateSnippet(snippetToEdit.id, updatedSnippet);
            onFinishEditing?.();
            return;
        }

        const newSnippet = createSnippetFromForm(formData);

        addSnippet(newSnippet);
        setFormData(initialFormData);
    }

    return (
        <form className="snippet-form" onSubmit={handleSubmit}>
            <label className="form-field">
                <span>Título</span>
                <input
                    type="text"
                    required
                    placeholder="Ej: Hook para manejar formularios"
                    value={formData.title}
                    onChange={(event) =>
                        setFormData({ ...formData, title: event.target.value })
                    }
                />
            </label>

            <label className="form-field">
                <span>Lenguaje</span>
                <input
                    type="text"
                    required
                    placeholder="Ej: TypeScript"
                    value={formData.language}
                    onChange={(event) =>
                        setFormData({ ...formData, language: event.target.value })
                    }
                />
            </label>

            <label className="form-field">
                <span>Descripción</span>
                <textarea
                    placeholder="Explicá brevemente para qué sirve este snippet"
                    value={formData.description}
                    onChange={(event) =>
                        setFormData({ ...formData, description: event.target.value })
                    }
                />
            </label>

            <label className="form-field">
                <span>Código</span>
                <textarea
                    required
                    placeholder="Pegá acá el código del snippet"
                    value={formData.code}
                    onChange={(event) =>
                        setFormData({ ...formData, code: event.target.value })
                    }
                />
            </label>

            <label className="form-field">
                <span>Etiquetas separadas por coma</span>
                <input
                    type="text"
                    placeholder="Ej: react, hooks, formularios"
                    value={formData.tags}
                    onChange={(event) =>
                        setFormData({ ...formData, tags: event.target.value })
                    }
                />
            </label>

            {error && <p className="form-error">{error}</p>}

            <button type="submit">
                {isEditing ? "Guardar cambios" : "Guardar snippet"}
            </button>
        </form>
    );
}