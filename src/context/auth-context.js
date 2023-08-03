// auth : 사용자 인증에 관련 (Authentication)
import React, { createContext } from "react";

const AuthContext = createContext({ isLoggedIn: false, onLogout: () => {} });

export default AuthContext;
