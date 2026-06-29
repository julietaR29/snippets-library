import { useMemo } from "react";
import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import python from "highlight.js/lib/languages/python";
import sql from "highlight.js/lib/languages/sql";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("ts", typescript);
hljs.registerLanguage("java", java);
hljs.registerLanguage("python", python);
hljs.registerLanguage("py", python);
hljs.registerLanguage("css", css);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("xml", xml);

type SnippetCodeDisplayProps = {
  code: string;
  language: string;
};

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeLanguage(language: string): string | null {
  const trimmedLanguage = language.trim().toLowerCase();

  if (!trimmedLanguage) {
    return null;
  }

  const aliases: Record<string, string> = {
    css: "css",
    html: "html",
    htm: "html",
    java: "java",
    javascript: "javascript",
    js: "javascript",
    jsx: "javascript",
    py: "python",
    python: "python",
    sql: "sql",
    ts: "typescript",
    tsx: "typescript",
    typescript: "typescript",
    xml: "xml",
  };

  return aliases[trimmedLanguage] ?? null;
}

export function SnippetCodeDisplay({ code, language }: SnippetCodeDisplayProps) {
  const normalizedLanguage = normalizeLanguage(language);
  const highlightedHtml = useMemo(() => {
    if (!normalizedLanguage) {
      return escapeHtml(code);
    }

    try {
      return hljs.highlight(code, { language: normalizedLanguage }).value;
    } catch {
      return escapeHtml(code);
    }
  }, [code, normalizedLanguage]);

  return (
    <pre className="snippet-code-block">
      <code
        className={normalizedLanguage ? `language-${normalizedLanguage}` : undefined}
        dangerouslySetInnerHTML={{ __html: highlightedHtml }}
      />
    </pre>
  );
}
