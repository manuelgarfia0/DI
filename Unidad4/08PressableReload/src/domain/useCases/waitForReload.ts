const RELOAD_DURATION_MS = 2000;

export function waitForReload(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, RELOAD_DURATION_MS);
  });
}