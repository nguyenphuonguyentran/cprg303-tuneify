import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

const Favorites = () => {
  const router = useRouter();
  const favorites = router.query?.favorites
    ? JSON.parse(router.query.favorites)
    : []; // Safely parse favorites

  const renderItem = ({ item }) => (
    <View style={styles.resultItem}>
      <Image source={{ uri: item.images[0]?.url }} style={styles.albumImage} />
      <View style={styles.textContainer}>
        <Text style={styles.albumName}>{item.name}</Text>
        <Text style={styles.artistName}>{item.artists[0]?.name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={styles.noFavoritesText}>No favorites added yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.resultsList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  noFavoritesText: {
    color: "gray",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  resultsList: {
    marginTop: 16,
  },
  resultItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  albumImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  albumName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  artistName: {
    color: "gray",
    fontSize: 14,
  },
});

export default Favorites;
