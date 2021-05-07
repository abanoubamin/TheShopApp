import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { SafeAreaView, Button, View } from "react-native";
import { useDispatch } from "react-redux";

import * as authActions from "../store/actions/auth";
import Colors from "../constants/Colors";

const CustomDrawerContent = (props) => {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView
      {...props}
      style={{ flex: 1, paddingTop: 20 }}
      contentContainerStyle={{ flex: 1 }}
    >
      <DrawerItemList {...props} />
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <Button
            title="Logout"
            color={Colors.primary}
            onPress={() => {
              dispatch(authActions.logout());
              props.navigation.navigate("Startup");
            }}
          />
        </SafeAreaView>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
