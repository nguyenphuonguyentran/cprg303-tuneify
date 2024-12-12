import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

const MainPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();
  const [favorites, setFavorites] = useState([]); // State for tracking favorites
  const navigation = useNavigation();

  const clientId = "ad634ce1d0b94290af1e523fd19cfd0b";
  const clientSecret = "7eab2f555a7149bc8102b5429fac3fdb";

  const fetchAccessToken = async () => {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const clientCredentials = `${clientId}:${clientSecret}`;
    const base64Credentials = btoa(clientCredentials);

    try {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${base64Credentials}`,
          },
        }
      );
      return response.data.access_token;
    } catch (err) {
      console.error("Error fetching access token:", err);
      setError("Failed to authenticate with Spotify.");
      return null;
    }
  };

  const fetchRandomSongsAndAlbums = async () => {
    setLoading(true);
    setError(null);

    const accessToken = await fetchAccessToken();
    if (!accessToken) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/browse/new-releases?limit=20",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setResults(response.data.albums.items);
    } catch (err) {
      console.error("Error fetching random songs and albums:", err);
      setError("Failed to fetch songs and albums.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomSongsAndAlbums();
  }, []);

  const toggleFavorite = (item) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === item.id)) {
        // Remove from favorites
        return prevFavorites.filter((fav) => fav.id !== item.id);
      } else {
        // Add to favorites
        return [...prevFavorites, item];
      }
    });
  };

  const renderItem = ({ item }) => {
    const isFavorite = favorites.some((fav) => fav.id === item.id);

    return (
      <View style={styles.resultItem}>
        <Image
          source={{ uri: item.images[0]?.url }}
          style={styles.albumImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.albumName}>{item.name}</Text>
          <Text style={styles.artistName}>{item.artists[0]?.name}</Text>
        </View>
        <TouchableOpacity
          style={[styles.favoriteButton, isFavorite && styles.favoriteActive]}
          onPress={() => toggleFavorite(item)}
        >
          <Text style={styles.favoriteButtonText}>
            {isFavorite ? "Unfavorite" : "Favorite"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Newest Releases</Text>

      {loading && <ActivityIndicator size="large" color="#1DB954" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.resultsList}
      />
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
  errorText: {
    color: "red",
    marginBottom: 16,
    fontSize: 14,
    textAlign: "center",
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
  favoriteButton: {
    backgroundColor: "#1DB954",
    padding: 10,
    borderRadius: 5,
  },
  favoriteActive: {
    backgroundColor: "#1DB954",
  },
  favoriteButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default MainPage;
