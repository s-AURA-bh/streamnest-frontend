"use client";

import { useEffect } from "react";

export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options: { meta?: boolean } = {}
) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const metaMatches = options.meta
        ? event.metaKey || event.ctrlKey
        : !event.metaKey && !event.ctrlKey;

      if (event.key.toLowerCase() === key.toLowerCase() && metaMatches) {
        event.preventDefault();
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback, key, options.meta]);
}
