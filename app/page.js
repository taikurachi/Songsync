"use client";
import { useEffect, useState } from "react";
import AuthScreen from "./components/AuthScreen";
import SongCard from "./components/SongCard";
import { fetchRecentlyPlayed } from "./utils/spotifyApi";

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [token, setToken] = useState(null);
  const logout = () => {
    sessionStorage.removeItem("spotify_access_token");
    setToken(null);
  };
  useEffect(() => {
    const hash = window.location.hash;
    const accessToken = new URLSearchParams(hash.substring(1)).get(
      "access_token"
    );
    if (accessToken) {
      sessionStorage.setItem("spotify_access_token", accessToken);
      window.location.hash = "";
    }

    setToken(sessionStorage.getItem("spotify_access_token"));
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
