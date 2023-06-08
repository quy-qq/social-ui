import { loginSubmit } from "../../services/auth.service";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./type";

export const loginSuccess = (payload: any) => {
  return {
    type: LOGIN_SUCCESS,
    payload: payload,
  };
};

export const login = async (token: string) => async (dispatch: any) => {
  try {
    const res = await loginSubmit(token);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: res.data },
    });
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });
  }
};

export const logout = () => (dispatch: any) => {
  // AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};

export const setLoginSuccess = (payload: any) => ({
  type: LOGIN_SUCCESS,
  payload,
});
