import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CommonActions } from "@react-navigation/native";

import ShopNavigator from "./ShopNavigator";

const NavContainer = (props) => {
  const navRef = useRef(null);
  const isAuth = useSelector((state) => !!state.auth.token);

  useEffect(() => {
    console.log(navRef.current);
  }, [navRef]);

  useEffect(() => {
    if (!isAuth) {
      // navRef.current.dispatch(CommonActions.navigate({ routeName: "Auth" }));
      navRef.current?.props.navigate({ name: "Startup" });
    }
  }, [isAuth]);

  return <ShopNavigator ref={navRef} />;
};

export default NavContainer;
