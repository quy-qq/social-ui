import authHeader from "./auth-header";
import axios from "axios";

export const post = async (currentPage: number) => {
  const res = await axios.get(
    `http://localhost:3002/api/v1/client/post?page=${currentPage}&limit=2&orderBy%5BcreatedAt%5D=ASC`,
    {
      headers: authHeader(),
    }
  );

  return res;
};

export const createPostService = async (data: any) => {
  const res = await axios.post(
    `http://localhost:3002/api/v1/client/post`,
    { data },
    {
      headers: authHeader(),
    }
  );

  return res;
};
