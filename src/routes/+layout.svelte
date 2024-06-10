<script lang="ts">
  import "../app.css";
  import type { PageData } from "./$types";
  import { QueryClientProvider } from "@tanstack/svelte-query";

  export let data: PageData;
</script>

<QueryClientProvider client={data.queryClient}>
  <slot />
</QueryClientProvider>
