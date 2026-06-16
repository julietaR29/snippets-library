import { createBrowserRouter } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <h1>Biblioteca de Snippets</h1>
      <p>Base del proyecto D1.</p>
    </main>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);