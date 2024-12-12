import {
  Image,
  View,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import * as React from "react";
import { Link } from "expo-router";

const Account = () => {
  return (
    <View style={styles.seAccount01}>
      <TouchableOpacity style={styles.vector} onPress={() => {}}>
        <Link href="../../(tabs)/settings">
          <Image
            resizeMode="contain"
            source={require("../../assets/Vectorback.png")}
          />
        </Link>
      </TouchableOpacity>
      <Text style={styles.account}>Account</Text>
      <View style={styles.groupContainer}>
        <View style={styles.usernameParent}>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.weareskittles}>weareskittles</Text>
        </View>
        <View style={styles.emailParent}>
          <Text style={[styles.email, styles.emailTypo]}>Email</Text>
          <Text style={[styles.skittlesgmailcom, styles.freeTypo1]}>
            skittles@gmail.com
          </Text>
        </View>
        <View style={styles.subscriptionParent}>
          <Text style={[styles.subscription, styles.freeTypo]}>
            Subscription
          </Text>
          <Text style={[styles.free, styles.freeTypo]}>{`FREE
`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    height: 31,
    fontFamily: "TT Norms Pro",
    textAlign: "center",
    position: "absolute",
  },
  freeTypo1: {
    left: 2,
    fontSize: 16,
    width: 370,
    color: "#585858",
    fontWeight: "500",
  },
  freeTypo: {
    height: 30,
    fontFamily: "TT Norms Pro",
    textAlign: "center",
    position: "absolute",
  },
  vector: {
    left: "7.91%",
    top: "8.8%",
    right: "89.3%",
    bottom: "88.84%",
    width: "2.79%",
    height: "2.36%",
    position: "absolute",
  },
  account: {
    height: "4.72%",
    marginLeft: -59,
    top: "7.62%",
    fontSize: 30,
    fontFamily: "Host Grotesk",
    width: 117,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  username: {
    marginLeft: -184,
    height: 33,
    width: 370,
    fontSize: 20,
    top: 0,
    fontFamily: "TT Norms Pro",
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  weareskittles: {
    top: 33,
    height: 34,
    fontSize: 16,
    left: 0,
    width: 372,
    color: "#585858",
    fontFamily: "TT Norms Pro",
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
  },
  usernameParent: {
    height: 67,
    width: 372,
  },
  email: {
    left: 0,
    height: 31,
    fontSize: 20,
    top: 0,
    width: 372,
    color: "#fff",
    fontWeight: "700",
  },
  skittlesgmailcom: {
    top: 31,
    height: 31,
    fontFamily: "TT Norms Pro",
    textAlign: "center",
    position: "absolute",
  },
  emailParent: {
    height: 62,
    alignSelf: "stretch",
  },
  subscription: {
    fontSize: 20,
    top: 0,
    height: 30,
    width: 372,
    marginLeft: -186,
    color: "#fff",
    fontWeight: "700",
    left: "50%",
  },
  free: {
    top: 30,
    left: 2,
    fontSize: 16,
    width: 370,
    color: "#585858",
    fontWeight: "500",
  },
  subscriptionParent: {
    height: 60,
    alignSelf: "stretch",
  },
  groupContainer: {
    top: 149,
    gap: 30,
    width: 372,
    marginLeft: -186,
    left: "50%",
    position: "absolute",
  },
  seAccount01: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: "#000",
    width: "100%",
  },
});

export default Account;
