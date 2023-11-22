import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { get } from "react-hook-form";
import "config/i18n";
import Router from "routing/Router";
import { StyledEngineProvider } from "@mui/material";

function Root() {
  const [isError, setIsError] = useState(false);
  const handleErrors = useCallback((error: unknown) => {
    const statusCode = get(error, "response.status");

    switch (statusCode) {
      case 401:
        setIsError(true);
        localStorage.removeItem("amILogged");
        return;
    }
  }, []);
  const queryClient = useMemo(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
          refetchOnWindowFocus: false,
          staleTime: 3000,
        },
      },
      queryCache: new QueryCache({
        onError: (err:any) => handleErrors(err),
      }),
      mutationCache: new MutationCache({
        onError: (err:any) => handleErrors(err),
      }),
    });
  }, [handleErrors]);

  useEffect(() => {
    if (globalThis?.document) {
      const body = globalThis.document.body;

      const observer = new MutationObserver(() => {
        body.style.touchAction = body.style.overflow === "hidden" ? "none" : "";
      });
      observer.observe(body, {
        attributes: true,
        attributeFilter: ["style"],
      });
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <StyledEngineProvider injectFirst>
        <Router isError={isError} setIsError={setIsError} />
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default Root;
