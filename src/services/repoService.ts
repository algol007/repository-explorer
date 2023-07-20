import { Repository } from "@/modules/Home/entity";
import { httpClient } from "../libs/httpClient";

type GetAllReposResponse = Repository[]

const repoService = {
  getAllRepos(user: string): Promise<GetAllReposResponse> {
    return httpClient.get(`/users/${user}/repos`);
  },
}

export default repoService;