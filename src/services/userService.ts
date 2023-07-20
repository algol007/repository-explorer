import { Username } from "@/modules/Home/entity";
import { httpClient } from "../libs/httpClient";

type GetAllReposResponse = Username[]

const userService = {
  getAllUser(user: string): Promise<GetAllReposResponse> {
    return httpClient.get(`/users/${user}`);
  },
}

export default userService;