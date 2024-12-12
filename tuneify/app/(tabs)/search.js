import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
} from "react-native";
import axios from "axios";
import { Audio } from "expo-av";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sound, setSound] = useState(null);

  const clientId = "ad634ce1d0b94290af1e523fd19cfd0b";
  const clientSecret = "7eab2f555a7149bc8102b5429fac3fdb";

  const fetchAccessToken = async () => {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const clientCredentials = `${clientId}:${clientSecret}`;
    const base64Credentials = btoa(clientCredentials); // Base64 encoding

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

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError(null);
    setResults([]);

    const accessToken = await fetchAccessToken();
    if (!accessToken) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(
          searchQuery
        )}&type=track&limit=10`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setResults(response.data.tracks.items);
    } catch (err) {
      console.error("Error fetching search results:", err);
      setError("Failed to fetch search results.");
    } finally {
      setLoading(false);
    }
  };

  const playTrack = async (previewUrl) => {
    if (!previewUrl) {
      setError("No preview available for this track.");
      return;
    }

    // Stop and unload any currently playing sound
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }

    try {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: previewUrl },
        { shouldPlay: true }
      );
      setSound(newSound);

      // Reset sound state after track finishes
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setSound(null);
        }
      });
    } catch (err) {
      console.error("Error playing track:", err);
      setError("Failed to play the track.");
    }
  };

  const pauseTrack = async () => {
    if (sound) {
      await sound.pauseAsync();
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.resultItem}
      onPress={() => playTrack(item.preview_url)}
    >
      <Image
        source={{ uri: item.album.images[0]?.url }}
        style={styles.albumImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.trackName}>{item.name}</Text>
        <Text style={styles.artistName}>{item.artists[0]?.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Search for tracks..."
        placeholderTextColor="gray"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {sound && (
        <TouchableOpacity style={styles.button} onPress={pauseTrack}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>
      )}
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
  },
  input: {
    backgroundColor: "#1E1E1E",
    color: "white",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1DB954",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 16,
    fontSize: 14,
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
  trackName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  artistName: {
    color: "gray",
    fontSize: 14,
  },
});

export default Search;
