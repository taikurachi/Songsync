import styles from "../page.module.css";

export default function AuthScreen() {
  return (
    <div className={styles.authScreen}>
      <h1>Log into Spotify</h1>
      <a
        className={styles.authScreenBtn}
        href={`https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.SPOTIFY_REDIRECT_URI}&response_type=token&scope=user-read-recently-played`}
      >
        Login
      </a>
    </div>
  );
}
