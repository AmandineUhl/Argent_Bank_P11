import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SET_USER_INFO } from "./UserReducer";

export const fetchUserInfo = (token) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/api/v1/user/profile", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { userName, firstName, lastName } = response.data.body;
        dispatch(setUserInfo(userName, firstName, lastName));
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };
};

export const setUserInfo = (username, firstname, lastname) => {
  return {
    type: SET_USER_INFO,
    payload: { username, firstname, lastname },
  };
};

export const updateUserUsername = createAsyncThunk(
  "user/updateUserUsername",
  async (newUsername, { getState }) => {
    const token = getState().login.token;

    try {
      const response = await axios.put(
        `http://localhost:3001/api/v1/user/profile`,
        {
          userName: newUsername,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
