import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./app/(tabs)/index";
import Search from "./app/(tabs)/search";
import Settings from "./app/(tabs)/settings";
import Index from "./app/index";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="Main" component={MainPage} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" components={Settings} />
        <Stack.Screen name="Login" components={Index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
