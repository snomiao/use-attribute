"use client";
import { useEffect, useRef, useState } from "react";

export function useAttribute<T extends HTMLElement = HTMLElement>(
  attributeName: string,
  value: string
) {
  const ref = useRef<T>(null);
  const [original, setOriginal] = useState<string | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const original = el.getAttribute(attributeName);
    setOriginal(original);
    el.setAttribute(attributeName, value);
    return () => {
      if (original === null) {
        el.removeAttribute(attributeName);
        return;
      }
      el.setAttribute(attributeName, original);
    };
  }, [attributeName, original, value]);
  return ref;
}
