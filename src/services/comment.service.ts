import axios from "axios";
import authHeader from "./auth-header";

export const commentService = async (idPost: string, limit: number) => {
  const res = await axios.get(
    `http://localhost:3002/api/v1/client/comment/${idPost}?page=1&limit=${limit}&orderBy%5BcreatedAt%5D=DESC`,
    {
      headers: authHeader(),
    }
  );
  return res;
};

export const deleteCommentService = async (id: string) => {
  const res = await axios.delete(
    `http://localhost:3002/api/v1/client/comment/${id}`,
    {
      headers: authHeader(),
    }
  );
  return res;
};

export const createCommentService = async (
  idPost: string,
  textComment: string
) => {
  const res = await axios.post(
    `http://localhost:3002/api/v1/client/comment/${idPost}`,
    { text: textComment },
    {
      headers: authHeader(),
    }
  );
  console.log(res);
  return res;
};
