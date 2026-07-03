export function onIdle(callback: () => void, timeout = 1500) {
  if (typeof window === "undefined") return () => {};

  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(callback, { timeout });
    return () => window.cancelIdleCallback(id);
  }

  const id = window.setTimeout(callback, 200);
  return () => window.clearTimeout(id);
}
