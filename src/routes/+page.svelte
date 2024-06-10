<script lang="ts">
  import { getJsonPlaceHolders } from "$lib/services/json-placeholder/jsonplaceholder";
  import HelloWorld from "$lib/components/helloWorld.svelte";
  import { useQueryClient } from "@tanstack/svelte-query";
  import { Endpoints } from "$lib/types/endpoint";
  import Button from "$lib/components/ui/button/button.svelte";
  import { cn } from "$lib/utils";

  const query = getJsonPlaceHolders();
  let rerender = true;

  const queryClient = useQueryClient()

  const revalidate = ()=>{
    queryClient.invalidateQueries({
      queryKey:[Endpoints.TODOS]
    })
  }
  
</script>

<main class="container">
  <HelloWorld name="SvelteKit" />
  <Button variant="outline" on:click={() => rerender = !rerender}>Toggle render</Button>
  <Button variant="default" on:click={revalidate}>revalidate</Button>

  {#if $query.isLoading}
    <p>Loading...</p>
  {:else if $query.error}
    <p>Error loading data: {$query.error.message}</p>
  {:else}
    <ul>
      {#each $query?.data?.data as todo}
        <li class={cn("bg-gray-200 border-2 p-2 my-4 hover:animate-pulse cursor-pointer rounded-lg")}>{todo.id}: {todo.title}</li>
      {/each}
    </ul>
  {/if}

  <p>{rerender}</p>
</main>
