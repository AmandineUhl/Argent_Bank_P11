import { loginUser } from "../Api";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const login = createAsyncThunk(
  "login/login",
  async ({ email, password }) => {
    try {
      const token = await loginUser({ email, password });
      return token;
    } catch (error) {
      throw error;
    }
  }
);