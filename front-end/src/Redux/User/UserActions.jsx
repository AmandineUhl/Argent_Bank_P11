import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfile, updateUserProfileUsername } from "../Api"; 
import { SET_USER_INFO } from "./UserReducer";

export const fetchUserInfo = (token) => {
  return async (dispatch) => {
    try {
      const userProfile = await fetchUserProfile(token);
      const { userName, firstName, lastName } = userProfile;
      dispatch(setUserInfo(userName, firstName, lastName));
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
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
      await updateUserProfileUsername(token, newUsername);
      return newUsername;
    } catch (error) {
      throw error;
    }
  }
);


