import React, { useEffect, useReducer, useState, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth-context";
import { Input } from "../UI/Input/Input";

const typingTimeout = () => console.log("ended typing");

//useReducer는 상태값이 많아서 서로 엮여있을 때 주로 사용, 최신의 상태값을 확인해준다.

const emailReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   const typingTimer = setTimeout(() => {
  //     typingTimeout();
  //   }, 1000);

  //   return () => clearTimeout(typingTimer);
  // }, [enteredEmail, enteredPassword]);

  const { actions } = useContext(AuthContext);

  useEffect(() => {
    setFormIsValid(emailState.isValid && passwordState.value.trim().length > 6);
  }, [emailState.isValid, passwordState.isValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "INPUT_CHANGE", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.includes("@") && enteredPassword.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(enteredEmail.includes("@"));
    dispatchEmail({ type: "INPUT_BLUR" });
    // blur : focus가 안 된 상태
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: "INPUT_CHANGE", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes("@")
    // );
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("login");
    actions.loginHandler(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailState.isValid}
          id="email"
          label="E-Mail"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          isValid={passwordState.isValid}
          id="password"
          label="Password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
