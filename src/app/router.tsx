import { createBrowserRouter } from "react-router-dom";
import { SnippetsPage } from "../features/snippets/pages/SnippetsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SnippetsPage />,
  },
]);