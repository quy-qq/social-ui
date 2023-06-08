import jwt_decode from "jwt-decode";

export default function authHeader() {
  const token = JSON.parse(sessionStorage.getItem("accessToken") || "{}");

  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}

export const checkToken = async () => {
  const token = sessionStorage.getItem("accessToken");
  if (token) {
    const decoded: any = await jwt_decode(token);
    if (Date.now() < decoded.exp * 1000) {
      return decoded;
    } else {
      return {};
    }
  }
};
