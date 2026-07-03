export type ViewTransitionHandle = {
  ready: Promise<void>;
  finished: Promise<void>;
  updateCallbackDone: Promise<void>;
};

/** Feature-detected wrapper; returns null where unsupported. */
export function startViewTransition(
  update: () => void | Promise<void>
): ViewTransitionHandle | null {
  const doc = document as Document & {
    startViewTransition?: (cb: () => void | Promise<void>) => ViewTransitionHandle;
  };
  if (typeof doc.startViewTransition !== "function") return null;
  return doc.startViewTransition(update);
}
