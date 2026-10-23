import { useCallback, useEffect, useRef, useState } from "react";

import { waitForReload } from "@/domain/useCases/waitForReload";

export function useReload() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const reload = useCallback(async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setIsLoaded(false);

    await waitForReload();

    if (isMounted.current) {
      setIsLoading(false);
      setIsLoaded(true);
    }
  }, [isLoading]);

  return { isLoaded, isLoading, reload };
}