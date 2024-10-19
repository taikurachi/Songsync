"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import AuthScreen from "./components/AuthScreen";
import useSpotifyAuth from "./hooks/useSpotifyAuth";
import SongCard from "./components/SongCard";

export default function Home() {
  const { token, logout } = useSpotifyAuth();
  const [songs, setSongs] = useState([]);

  return (
    <>
      {songs.length === 0 ? (
        <AuthScreen token={token} logout={logout} setSongs={setSongs} />
      ) : (
        ""
      )}

      <SongCard songs={songs} />
    </>
  );
}
