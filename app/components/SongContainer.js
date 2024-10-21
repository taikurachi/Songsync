import styles from "../page.module.css";
import Image from "next/image";
export default function SongContainer({ currentSong }) {
  const songData = {
    artists: currentSong.track.artists.map((artist) => artist.name).join(", "),
    imageUrl: currentSong.track.album.images[2].url,
    name: currentSong.track.name,
    artistsAmount: currentSong.track.artists.length,
    defaultArtist: currentSong.track.artists[0].name,
    albumName: currentSong.track.album.name,
  };

  return (
    <div className={styles.songContainer}>
      <div className={styles.songContents}>
        <div className={styles.songLeftCol}>
          <div className={styles.songImageContainer}>
            <Image
              src={songData.imageUrl}
              className={styles.songImage}
              width={50}
              height={50}
              alt="image"
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
  );
}
