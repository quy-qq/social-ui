import axios from "axios";
import authHeader from "./auth-header";

export const likeService = async (idPost: string) => {
  const res = await axios.post(
    `http://localhost:3002/api/v1/client/like/${idPost}`,
    {},
    {
      headers: authHeader(),
    }
  );

  return res;
};

export const checkLikedService = async (idPost: string) => {
  const res = await axios.get(
    `http://localhost:3002/api/v1/client/like/check-liked/${idPost}`,
    {
      headers: authHeader(),
    }
  );

  return res;
};
