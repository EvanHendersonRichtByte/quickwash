// import { StatusBar } from "expo-status-bar";
import React from "react";
import Index from "./screen/Index";
import Register from "./screen/Register";
import Login from "./screen/Login";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
        <Screen
          name="Register"
          component={Register}
          options={({ navigation }) => ({
            headerTransparent: "true",
            headerTitle: "",
            headerLeft: () => (
              <TouchableOpacity
                style={style.backButtonContainer}
                onPress={() => navigation.navigate("Index")}
              >
                <Text style={style.backButton}>{"<"}</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            headerTransparent: "true",
            headerTitle: "",
            headerLeft: () => (
              <TouchableOpacity
                style={style.backButtonContainer}
                onPress={() => navigation.navigate("Index")}
              >
                <Text style={style.backButton}>{"<"}</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  backButtonContainer: { justifyContent: "center", paddingLeft: 15 },
  backButton: { fontSize: 30, fontWeight: "100" },
});
