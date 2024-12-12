import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  View,
  Text,
} from "react-native";
import * as React from "react";
import { Link } from "expo-router";
import Toggle from "../components/toggle";

const DataSaver = () => {
  return (
    <View style={styles.seDatasaver01}>
      <TouchableOpacity style={styles.vector} onPress={() => {}}>
        <Link href="../../(tabs)/settings">
          <Image
            resizeMode="contain"
            source={require("../../assets/Vectorback.png")}
          />
        </Link>
      </TouchableOpacity>
      <Text style={styles.dataSaver}>Data Saver</Text>
      <View style={[styles.groupContainer, styles.navigationBarPosition]}>
        <View style={styles.dataSaverParent}>
          <Text style={[styles.dataSaver1, styles.dataSaver1Typo]}>
            Data Saver
          </Text>
          <Text style={[styles.setsAudioQuality, styles.audioTypo1]}>
            Sets audio quality to low, and hides canvases as well as audio
            previews on home.
          </Text>
          <View style={[styles.modeOnOff, styles.modeLayout]}>
            <Toggle />
          </View>
        </View>
        <View style={styles.streamAudioOnlyParent}>
          <Text style={[styles.streamAudioOnly, styles.audioTypo]}>
            Stream audio only
          </Text>
          <Text style={[styles.playAudioOnly, styles.audioTypo]}>
            Play audio only when not on WiFi.
          </Text>
          <View style={[styles.modeOnOff1, styles.modeLayout]}>
            <Toggle />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBarPosition: {
    left: "50%",
    position: "absolute",
  },
  dataSaver1Typo: {
    textAlign: "left",
    fontFamily: "TT Norms Pro",
    position: "absolute",
  },
  audioTypo1: {
    width: 334,
    fontSize: 16,
    left: 2,
    color: "#585858",
    fontWeight: "500",
  },
  modeLayout: {
    height: 19,
    width: 36,
    left: 336,
    position: "absolute",
  },
  audioTypo: {
    height: 31,
    textAlign: "left",
    fontFamily: "TT Norms Pro",
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
  dataSaver: {
    height: "4.72%",
    marginLeft: -132,
    top: "7.62%",
    fontSize: 30,
    fontFamily: "Host Grotesk",
    width: 271,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  dataSaver1: {
    width: 138,
    height: 33,
    fontSize: 20,
    left: 0,
    top: 0,
    color: "#fff",
    fontWeight: "700",
  },
  setsAudioQuality: {
    top: 33,
    height: 34,
    textAlign: "left",
    fontFamily: "TT Norms Pro",
    position: "absolute",
  },
  dataSaverParent: {
    height: 67,
    alignSelf: "stretch",
  },
  streamAudioOnly: {
    width: 234,
    fontSize: 20,
    left: 0,
    top: 0,
    color: "#fff",
    fontWeight: "700",
  },
  playAudioOnly: {
    top: 31,
    width: 334,
    fontSize: 16,
    left: 2,
    color: "#585858",
    fontWeight: "500",
  },
  groupContainer: {
    marginLeft: -186,
    top: 149,
    width: 372,
    gap: 30,
  },
  seDatasaver01: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#000",
  },
});

export default DataSaver;
