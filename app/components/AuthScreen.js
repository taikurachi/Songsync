import styles from "../page.module.css";
import { fetchRecentlyPlayed } from "../utils/spotifyApi";
import { useEffect } from "react";

export default function AuthScreen({ token, logout, setSongs }) {
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
  }, [token, setSongs]);

  return (
    <div className={styles.authScreen}>
      <h1>Log into Spotify</h1>
      {!token ? (
        <a
          className={styles.authScreenBtn}
          href={`https://accounts.spotify.com/authorize?client_id=${process.env.SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}&response_type=token&scope=user-read-recently-played`}
        >
          Login
        </a>
      ) : (
        <button className={styles.authScreenBtn} onClick={logout}>
          Log out
        </button>
      )}
      <ul></ul>
    </div>
  );
}
