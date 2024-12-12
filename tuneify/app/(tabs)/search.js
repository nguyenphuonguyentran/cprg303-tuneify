import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ActivityIndicator, Image } from "react-native";
import axios from "axios";
import { Audio } from "expo-av";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sound, setSound] = useState(null);
  const [currentlyPlayingTrack, setCurrentlyPlayingTrack] = useState(null);
  const [trackDetails, setTrackDetails] = useState(null); // State to store track details

  const clientId = "ad634ce1d0b94290af1e523fd19cfd0b";
  const clientSecret = "7eab2f555a7149bc8102b5429fac3fdb";

  // Fetch access token from Spotify API
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

  // Search for tracks
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
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchQuery)}&type=track&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
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

  // Fetch track details from the Spotify API using trackId
  const fetchTrackDetails = async (trackId) => {
    const accessToken = await fetchAccessToken();

    if (!accessToken) {
      setError("Failed to authenticate with Spotify.");
      return;
    }

    try {
      const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTrackDetails(response.data); // Store the track details in the state
    } catch (err) {
      console.error("Error fetching track details:", err);
      setError("Failed to fetch track details.");
    }
  };

  // Play track
  const playTrack = async (previewUrl, trackId) => {
    if (!previewUrl) {
      setError("No preview available for this track.");
      return;
    }

    // If the same track is already playing, resume playback
    if (currentlyPlayingTrack === trackId && sound) {
      const status = await sound.getStatusAsync();
      if (status.isLoaded && !status.isPlaying) {
        await sound.playAsync();
        return;
      }
    }

    // Stop current sound and load the new track
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }

    try {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: previewUrl },
        { shouldPlay: true }
      );
      setSound(newSound);
      setCurrentlyPlayingTrack(trackId);

      // Handle track playback completion
      newSound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setCurrentlyPlayingTrack(null);
          setSound(null);
        }
      });
    } catch (err) {
      console.error("Error playing track:", err);
      setError("Failed to play the track.");
    }
  };

  // Pause track
  const pauseTrack = async () => {
    if (sound) {
      const status = await sound.getStatusAsync();
      if (status.isPlaying) {
        await sound.pauseAsync();
      }
    }
  };

  // Stop track
  const stopTrack = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
      setCurrentlyPlayingTrack(null);
      setSound(null);
    }
  };

  // Render each track item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.resultItem,
        item.id === currentlyPlayingTrack && { backgroundColor: "#1DB954" }, // Highlight the currently playing track
      ]}
      onPress={() => {
        playTrack(item.preview_url, item.id); // Play the selected track
        fetchTrackDetails(item.id); // Fetch track details when a track is selected
      }}
    >
      <Image source={{ uri: item.album.images[0]?.url }} style={styles.albumImage} />
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
        <>
          <TouchableOpacity style={styles.button} onPress={pauseTrack}>
            <Text style={styles.buttonText}>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={stopTrack}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
        </>
      )}

      {loading && <ActivityIndicator size="large" color="#1DB954" />}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {trackDetails && (
        <View style={styles.trackDetailsContainer}>
          <Text style={styles.trackDetailsTitle}>{trackDetails.name}</Text>
          <Text style={styles.trackDetailsArtist}>{trackDetails.artists[0]?.name}</Text>
          <Text style={styles.trackDetailsAlbum}>{trackDetails.album.name}</Text>
          <Image source={{ uri: trackDetails.album.images[0]?.url }} style={styles.trackDetailsImage} />
        </View>
      )}

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
  trackDetailsContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  trackDetailsTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  trackDetailsArtist: {
    color: "gray",
    fontSize: 18,
  },
  trackDetailsAlbum: {
    color: "gray",
    fontSize: 18,
    marginBottom: 8,
  },
  trackDetailsImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginTop: 16,
  },
});

export default Search;
