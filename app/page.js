"use client";
import { useEffect, useState } from "react";
import AuthScreen from "./components/AuthScreen";
import useSpotifyAuth from "./hooks/useSpotifyAuth";
import SongCard from "./components/SongCard";
import { fetchRecentlyPlayed } from "./utils/spotifyApi";

export default function Home() {
  const { token, logout } = useSpotifyAuth();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (token) {
      const getRecentlyPlayed = async () => {
        const data = await fetchRecentlyPlayed(token);
        if (data) {
          setSongs(data.items);
        }
      };

      getRecentlyPlayed();
    }
  }, [token]);

  return (
    <>
      {token && songs.length > 0 ? (
        <SongCard songs={songs} logout={logout} />
      ) : (
        <AuthScreen />
      )}
    </>
  );
}
