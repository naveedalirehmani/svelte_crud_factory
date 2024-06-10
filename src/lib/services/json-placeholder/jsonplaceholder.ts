import { createQuery } from '@tanstack/svelte-query';
import jsonPlaceHolderService from "$lib/services/json-placeholder/jsonplaceholder.service";
import { Endpoints } from "$lib/types/endpoint";

export function getJsonPlaceHolders() {
  return createQuery({
    queryKey: [Endpoints.TODOS],
    queryFn: jsonPlaceHolderService.getTodos,
  });
}