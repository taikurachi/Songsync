import { useEffect } from "react";
import styles from "../page.module.css";
import Image from "next/image";
export default function SongContainer({
  currentSong,
  size = "main",
  handleSongChange,
  handArtistChange,
}) {
  const songData = currentSong.track
    ? {
        artists:
          currentSong.track.artists.map((artist) => artist.name).join(", ") ||
          "Unknown artist",
        imageUrl: currentSong.track.album.images[2]?.url,
        name: currentSong.track.name || "Unknown track name",
        artistsAmount: currentSong.track.artists.length,
        defaultArtist: currentSong.track.artists[0].name,
        albumName:
          (currentSong.track.album.name.length > 10 &&
          currentSong.track.name.length > 20 &&
          size === "small"
            ? currentSong.track.album.name.slice(0, 10) + "..."
            : currentSong.track.album.name) || "Unknown Album",
        id: currentSong.track.id || "Unknown id",
        songUrl: currentSong.track.external_urls.spotify,
      }
    : null;
  console.log(currentSong);
  return (
    <>
      {songData ? (
        <div
          className={`${styles.songContainer} ${
            size === "small" ? styles.small : ""
          }`}
          onClick={
            size === "main"
              ? handArtistChange
              : () => handleSongChange(songData.id)
          }
        >
          <div className={styles.songContents}>
            <div className={styles.songLeftCol}>
              <div className={styles.songImageContainer}>
                <Image
                  src={songData.imageUrl}
                  className={styles.songImage}
                  width={size === "small" ? 30 : 50}
                  height={size === "small" ? 40 : 50}
                  alt="image"
                  title="Open in Spotify"
                  onClick={() => window.open(songData.songUrl, "_blank")}
                />
              </div>
              <div className={styles.songDetails}>
                <p className={styles.songTitle}>{songData.name}</p>
                <p className={styles.songArtist}>
                  {songData.artistsAmount > 1
                    ? songData.artists
                    : songData.defaultArtist}
                </p>
              </div>
            </div>
            <p className={styles.songAlbum}>{songData.albumName}</p>
          </div>
        </div>
      ) : (
        <p>No song data available</p>
      )}
    </>
  );
}
