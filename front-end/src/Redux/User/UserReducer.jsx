export const SET_USER_INFO = "SET_USER_INFO";

const initialState = {
  username: "",
  firstname: "",
  lastname: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        username: action.payload.username,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      };
    default:
      return state;
  }
};

export default UserReducer;
