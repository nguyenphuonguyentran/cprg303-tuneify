import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import * as React from "react";
import { Link } from "expo-router";
const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {/* Settings Heading */}
      <Text style={styles.header}>Settings</Text>; {/* Profile Container */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          backgroundColor: "#000000",
        }}
      >
        {/* Profile Image */}
        <Image
          style={{ borderRadius: 100 }}
          resizeMode="cover"
          source={require("../../assets/defaultprofileimage.jpg")}
        ></Image>

        {/* Profile Name */}
        <Text style={styles.profilename}>Skittles</Text>
      </View>
      {/* Settings Options */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 40,
          gap: 50,
        }}
      >
        {/* Option 1: Account */}
        <TouchableOpacity style={styles.accountParent} onPress={() => {}}>
          <Link href="../../settings-option/account">
            <Text style={[styles.account, styles.accountTypo]}>Account</Text>
          </Link>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../../assets/Vector.png")}
          />
        </TouchableOpacity>

        {/* Option 2: Data Saver */}
        <TouchableOpacity style={styles.accountParent} onPress={() => {}}>
          <Link
            href="../../settings-option/datasaver"
            style={[styles.account, styles.accountTypo]}
          >
            Data Saver
          </Link>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../../assets/Vector.png")}
          />
        </TouchableOpacity>

        {/* Option 3: Storage */}
        <TouchableOpacity style={styles.socialsParent} onPress={() => {}}>
          <Link
            href="../../settings-option/storage"
            style={[styles.audioQuality, styles.accountTypo]}
          >
            Storage
          </Link>
          <Image
            style={[styles.vectorIcon4, styles.vectorIconPosition]}
            resizeMode="cover"
            source={require("../../assets/Vector.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          backgroundColor: "#000000",
        }}
      >
        {/* Logout Button */}
        <TouchableOpacity style={styles.button}>
          {/* Login Title */}
          <Link href="http://localhost:8081/" style={styles.buttonText}>
            Log Out
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Host Grotesk",
    color: "#fff",
    textAlign: "left",
    marginLeft: 37,
    marginTop: 71,
    width: 198,
    height: 44,
  },
  button: {
    backgroundColor: "#D9D9D9",
    borderRadius: 50,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Host Grotesk",
  },
  profilename: {
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Host Grotesk",
    color: "#fff",
    textAlign: "left",
    width: 198,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    backgroundColor: "#000000",
  },
  profilecontainer: {
    flex: 1,
    marginLeft: 37,
    marginTop: 10,
    flexDirection: "row",
    gap: 15,
  },
  accountTypo: {
    height: 18,
    textAlign: "left",
    color: "#fff",
    fontFamily: "Host Grotesk",
    fontWeight: "700",
    fontSize: 20,
    left: 0,
    top: 2,
    position: "absolute",
  },
  vectorIconPosition: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  account: {
    width: 115,
  },
  vectorIcon: {
    width: "3.4%",
    left: "96.6%",
  },
  accountParent: {
    width: 353,
    height: 22,
  },
  vectorIcon4: {
    width: "3.44%",
    left: "96.56%",
  },
  socialsParent: {
    width: 349,
    height: 22,
  },
  audioQuality: {
    width: 148,
  },
  groupParent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 200,
    gap: 15,
    width: 100,
    height: 100,
  },
});
