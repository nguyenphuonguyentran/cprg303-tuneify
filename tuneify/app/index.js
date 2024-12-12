import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Link, useNavigation } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import tuneify from "../assets/tuneify.png";
import { ScrollView } from "react-native-web";

const Index = () => {
  // State variable to hold the password input
  const [password, setPassword] = useState("");

  // State variable to keep track of the visibility of password
  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Navigation
  const navigation = useNavigation();

  return (
    // Application background
    <ScrollView style={{ backgroundColor: "#000000" }}>
      <View style={styles.container}>
        {/* The Tuneify Logo */}
        <Image
          source={require("../assets/tuneify.png")}
          styles={styles.tuneifysmalllogo}
          resizeMode="contain"
        ></Image>

        {/* The card area holding the username and password fields */}
        <View style={styles.card}>
          {/* Application Slogan */}
          <Text style={styles.heading}> Tuneify </Text>
          <Text style={styles.smallheading}> Where your soul speaks </Text>

          {/* Username Title */}
          <Text style={styles.inputtitle}> Username </Text>

          {/* Username Icon */}
          <View style={styles.inputGroup}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="account"
              size={24}
              color="#fff"
            />

            {/* Username TextInput field */}
            <TextInput
              style={styles.inputBox}
              placeholder="Username"
              placeholderTextColor="#aaa"
            />
          </View>

          {/* Password Title */}
          <Text style={styles.inputtitle}> Password </Text>

          {/* Password Icon */}
          <View style={styles.inputGroup}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="lock-outline"
              size={24}
              color="#fff"
            />

            {/* Password TextInput field */}
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={styles.inputBox}
              placeholder="Password"
              placeholderTextColor="#aaa"
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#fff"
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.button}>
            {/* Login Title */}
            <Link href="/(tabs)" style={styles.buttonText}>
              Log In
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#000000",
  },
  card: {
    width: "50%",
    backgroundColor: "#000000",
    borderRadius: 10,
    padding: 20,
    paddingBottom: 40,
    shadowRadius: 10,
    elevation: 3,
  },
  heading: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Host Grotesk",
  },
  smallheading: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 200,
    marginBottom: 80,
    textAlign: "center",
    fontFamily: "Host Grotesk",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 10,
    backgroundColor: "#585858",
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 50,
  },
  inputBox: {
    flex: 1,
    fontSize: 16,
    marginTop: 7,
    color: "#fff",
    fontFamily: "Host Grotesk",
  },
  icon: {
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 20,
    width: "auto",
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Host Grotesk",
  },
  link: {
    fontSize: 16,
    color: "#D9D9D9",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 10,
    fontFamily: "Host Grotesk",
  },
  tuneifysmalllogo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    flex: 1,
    borderRadius: 50,
  },
  inputtitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    textAlign: "left",
    fontFamily: "Host Grotesk",
  },
});
