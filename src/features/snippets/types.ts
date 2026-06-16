//como se guarda el dato real en la app
export type Snippet = {
  id: string;
  title: string;
  language: string;
  code: string;
  description: string;
  tags: string[];
  favorite: boolean;
  createdAt: string;
  updatedAt: string;
};
//como viene desde el formulario (suele escribirse con texto)
export type SnippetFormData = {
  title: string;
  language: string;
  code: string;
  description: string;
  tags: string;
};