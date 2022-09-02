import { createContext, useState, useReducer, useEffect } from "react";

const AuthContext = createContext();

const initialUser = {
  access_token: null,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        access_token: action.payload.access_token,
        user: action.payload.access_token,
      };

    case "Logout":
      return { access_token: null, user: null };
    default:
      console.log("Nooooo");
  }
};

const AuthProvider = ({ children }) => {
  const [authValue, dispatch] = useReducer(authReducer, initialUser);

  //   const [accessToken, setAccessToken] = useState()

  return (
    <AuthContext.Provider value={{ authValue, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
