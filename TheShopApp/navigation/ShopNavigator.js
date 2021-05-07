import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform, SafeAreaView, Button, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";
import EditProductScreen from "../screens/user/EditProductScreen";
import AuthScreen from "../screens/user/AuthScreen";
import StartupScreen from "../screens/StartupScreen";
import CustomDrawerComponent from "./CustomDrawerComponent";
import Colors from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "OpenSans-Bold",
  },
  headerBackTitleStyle: {
    fontFamily: "OpenSans-Regular",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const Stack = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const OrdersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
};

const AdminNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen name="UserProducts" component={UserProductsScreen} />
      <Stack.Screen name="EditProduct" component={EditProductScreen} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const ShopNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerComponent {...props} />}
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={color}
            />
          ),
        }}
        name="Products"
        component={ProductsNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={color}
            />
          ),
        }}
        name="Orders"
        component={OrdersNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={color}
            />
          ),
        }}
        name="Admin"
        component={AdminNavigator}
      />
    </Drawer.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ ...defaultNavOptions }}>
      <Stack.Screen name="Startup" component={StartupScreen} />
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen
        name="Shop"
        component={ShopNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
