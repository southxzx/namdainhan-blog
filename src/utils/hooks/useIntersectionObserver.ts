import { RefObject, useEffect, useState } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}
const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    // freezeOnceVisible = false,
  }: Args,
): IntersectionObserverEntry | undefined | boolean => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    if (entry && entry.isIntersecting) {
      setIntersecting(true);
    }
  }

  useEffect(() => {
    const node = elementRef?.current // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver
    if (!hasIOSupport || !node) return;

    const options = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, options);
    observer.observe(node);
    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin]);

  return isIntersecting;
}
export default useIntersectionObserver;