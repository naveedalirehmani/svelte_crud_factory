import type { LayoutLoad } from "./$types";
import { QueryClient } from "@tanstack/svelte-query";

export const load: LayoutLoad = async () => {
  return {
    queryClient: new QueryClient({
      defaultOptions: {
        queries: {},
      },
    }),
  };
};
