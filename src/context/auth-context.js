// auth : 사용자 인증에 관련 (Authentication)
import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({
  state: { isLoggedIn: null },
  actions: {
    onLogout: () => {},
    loginHandler: () => {},
    logoutHandler: () => {},
    setIsLoggedIn: () => {},
  },
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const { state, action } = createContext(AuthContextProvider);

  useEffect(() => {
    const storedLoggedinInfo = localStorage.getItem("isLoggedIn");
    if (storedLoggedinInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const value = {
    state: { isLoggedIn },
    actions: { setIsLoggedIn, loginHandler, logoutHandler },
  };

  console.log(isLoggedIn);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export { AuthContextProvider };
export default AuthContext;
