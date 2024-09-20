export default function debouncedFn<F>(fn: F, delay: number) {
  if (typeof fn !== "function") throw new Error("fn must be a function.");

  let timeout: NodeJS.Timeout | null = null;

  function clearTimeOut() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  }

  return function (...args: any) {
    clearTimeOut();

    timeout = setTimeout(() => {
      fn(args);
      clearTimeOut();
    }, delay);
  } as unknown as F;
}
