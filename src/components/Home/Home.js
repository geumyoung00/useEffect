import React, { useContext } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./Home.module.css";
import AuthContext from "../../context/auth-context";

const Home = (props) => {
  const { actions } = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={actions.logoutHandler}>Log out</Button>
    </Card>
  );
};

export default Home;
