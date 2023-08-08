import React, { useState, useEffect, createContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, { AuthContextProvider } from "./context/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedLoggedinInfo = localStorage.getItem("isLoggedIn");
  //   if (storedLoggedinInfo === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const { state, action } = createContext(AuthContextProvider);

  return (
    <AuthContextProvider
    //value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      <>
        <MainHeader
          isAuthenticated={state.isLoggedIn}
          onLogout={action.logoutHandler}
        />
        <main>
          {!state.isLoggedIn && <Login onLogin={action.loginHandler} />}
          {state.isLoggedIn && <Home onLogout={action.logoutHandler} />}
        </main>
      </>
    </AuthContextProvider>
  );
}

export default App;
