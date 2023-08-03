import React, { useContext } from "react";
import AuthContext from "../../../context/auth-context";
import classes from "./Button.module.css";

const Button = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={ctx.onLogout}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
