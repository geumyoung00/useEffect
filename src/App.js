import React, {
  useState,
  useEffect,
  createContext,
  useCallback,
  useContext,
} from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, { AuthContextProvider } from "./context/auth-context";

const App = () => {
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

  const { state, actions } = useContext(AuthContext);

  return (
    <>
      <MainHeader
        isAuthenticated={state.isLoggedIn}
        onLogout={actions.logoutHandler}
      />
      <main>
        {!state.isLoggedIn && <Login />}
        {state.isLoggedIn && <Home onLogout={actions.logoutHandler} />}
      </main>
    </>
  );
};

export default App;
