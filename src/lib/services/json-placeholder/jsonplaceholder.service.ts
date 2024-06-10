import instance from "$lib/services/api";
import { Endpoints } from "$lib/types/endpoint";

export default class jsonService {
//   private static Azure = "/mail-data/azure";
  
  static getTodos() {
    // const url = `${jsonService.Azure}/${Endpoints.TODOS}`;
    const url = `/${Endpoints.TODOS}`;
    return instance.get(url);
  }
}
