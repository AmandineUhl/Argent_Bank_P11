import axios from "axios";

export const loginUser = async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/user/login",
        {
          email,
          password,
        }
      );
  
      return response.data.body.token;
    } catch (error) {
      throw error;
    }
  };

export const fetchUserProfile = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.body;
  } catch (error) {
    throw error;
  }
};

export const updateUserProfileUsername = async (token, newUsername) => {
  try {
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
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
};
