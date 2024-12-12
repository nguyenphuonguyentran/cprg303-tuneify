import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Button } from "react-native-elements";
import * as React from "react";
import { useState } from "react";
import { Link } from "expo-router";

const Storage = () => {
  const [isClearPressed, setIsClearPressed] = useState(false);

  const [isRemovePressed, setIsRemovePressed] = useState(false);

  return (
    <View style={styles.seStorage01}>
      <TouchableOpacity style={styles.vector}>
        <Link href="../../(tabs)/settings">
          <Image
            resizeMode="contain"
            source={require("../../assets/Vectorback.png")}
          />
        </Link>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.groupContainer}
        onPress={() => setIsRemovePressed(!isRemovePressed)}
      >
        <View
          style={[
            styles.groupChild,
            styles.groupBg,
            isRemovePressed ? { backgroundColor: "#808080" } : {},
          ]}
        />
        <Text
          style={[
            styles.removeAllDownloads,
            styles.clearCacheTypo,
            isRemovePressed ? { color: "#d9d9d9" } : {},
          ]}
        >
          Remove all Downloads
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.groupPressable, styles.groupPosition]}
        onPress={() => setIsClearPressed(!isClearPressed)}
      >
        <View style={[styles.groupFrame, styles.groupPosition]}>
          <View style={[styles.groupFrame, styles.groupPosition]}>
            <View
              style={[
                styles.groupPosition,
                styles.groupItem,
                isClearPressed ? { backgroundColor: "#808080" } : {},
              ]}
            />
          </View>
        </View>
        <Text
          style={[
            styles.clearCache,
            styles.clearCacheTypo,
            isClearPressed ? { color: "#d9d9d9" } : {},
          ]}
        >
          Clear Cache
        </Text>
      </TouchableOpacity>
      <Text style={[styles.removeAllThe, styles.youCanFreeTypo]}>
        Remove all the Tuneify’s content you have downloaded for offline use.
      </Text>
      <Text style={[styles.youCanFree, styles.youCanFreeTypo]}>
        You can free up storage by clearing the cache. This won’t affect any of
        the downloaded content from Tuneify.
      </Text>
      <Text style={[styles.storage, styles.storageTypo]}>Storage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  storageTypo: {
    color: "#fff",
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  groupBg: {
    backgroundColor: "#d9d9d9",
    borderRadius: 50,
    top: 0,
  },
  clearCacheTypo: {
    height: 24,
    color: "#000",
    fontSize: 20,
    top: "50%",
    marginTop: -11.5,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: "TT Norms Pro",
    left: "50%",
    position: "absolute",
  },
  groupPosition: {
    width: 214,
    marginLeft: -107,
    height: 53,
    left: "50%",
    position: "absolute",
  },
  youCanFreeTypo: {
    fontSize: 16,
    textAlign: "center",
    color: "#585858",
    fontFamily: "TT Norms Pro",
    fontWeight: "500",
    left: "50%",
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
  groupChild: {
    marginLeft: -121.5,
    height: 53,
    width: 243,
    left: "50%",
    position: "absolute",
  },
  removeAllDownloads: {
    marginLeft: -113.5,
    width: 227,
  },
  groupContainer: {
    marginLeft: -121,
    top: 443,
    height: 53,
    width: 243,
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: "#d9d9d9",
    borderRadius: 50,
    top: 0,
  },
  groupFrame: {
    top: 0,
  },
  clearCache: {
    marginLeft: -106,
    width: 213,
  },
  groupPressable: {
    top: 230,
  },
  removeAllThe: {
    marginLeft: -178,
    top: 352,
    width: 356,
    height: 39,
  },
  youCanFree: {
    marginLeft: -183,
    top: 148,
    width: 367,
    height: 62,
  },
  storage: {
    height: "4.72%",
    marginLeft: -104,
    top: "7.62%",
    fontSize: 30,
    fontFamily: "Host Grotesk",
    width: 207,
    left: "50%",
  },
  seStorage01: {
    flex: 1,
    height: 932,
    overflow: "hidden",
    backgroundColor: "#000",
    width: "100%",
  },
});

export default Storage;
