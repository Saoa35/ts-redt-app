import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser, ServerResponse } from "../../models/models";

export const githubApi = createApi({
  reducerPath: "github/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.gitgub.com",
  }),
  endpoints: (build) => ({
    searchUsers: build.query<ServerResponse<IUser>, string>({
      query: (search: string) => ({
        url: "search/users",
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformErrorResponse: (response: ServerResponse<IUser>) =>
        response.items,
    }),
  }),
});

export const { useSearchUsersQuery } = githubApi;
