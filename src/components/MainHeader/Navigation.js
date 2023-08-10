import { toHaveValue } from "@testing-library/jest-dom/matchers";
import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  const { state, actions } = useContext(AuthContext);
  // console.log(ctx);

  return (
    <nav className={classes.nav}>
      <ul>
        {state.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {state.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {state.isLoggedIn && (
          <li>
            <button onClick={actions.logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
