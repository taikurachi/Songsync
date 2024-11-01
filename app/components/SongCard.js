import styles from "../page.module.css";
import SongContainer from "./SongContainer";
import EventContainer from "./EvenContainer";
import { useEffect, useState } from "react";
import getColorPalette from "../utils/getColorPalette";
import Arrow from "./Arrow";
import Footer from "./Footer";
import { getDominantColor } from "../utils/getDominantColor";

export default function SongCard({ songs, logout }) {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [color, setColor] = useState([40, 40, 40]);
  const [artistIndex, setArtistIndex] = useState(0);
  const artistName = currentSong.track.artists[artistIndex].name;
  const colorPaletteDark =
    color[0] !== 40 ? `rgba(${getColorPalette(color, 1)})` : 40;
  const colorPaletteLight =
    color[0] !== 40 ? `rgba(${getColorPalette(color, 0.5)})` : 40;

  useEffect(() => {
    if (currentSong) {
      const fetchColor = async () => {
        const dominantColor = await getDominantColor(
          currentSong.track.album.images[2].url
        );
        setColor(dominantColor);
      };
      fetchColor();
      setArtistIndex(0);
    }
  }, [currentSong]);

  const handleSongChange = (id) => {
    if (!id) return;
    const song = songs.find((song) => song.track.id === id);
    setCurrentSong(song);
    setArtistIndex(0);
  };
  const handleArtistChange = () => {
    if (!currentSong) return;
    const index =
      artistIndex < currentSong.track.artists.length - 1 ? artistIndex + 1 : 0;
    setArtistIndex(index);
  };

  {
    return songs?.length === 0 ? (
      ""
    ) : (
      <div className={styles.songSyncLayout}>
        <main className={styles.songCard}>
          <h1 className={styles.cardTitle}>
            Recently played song
            <span style={{ color: colorPaletteDark }}>:</span>
          </h1>
          <SongContainer
            currentSong={currentSong}
            handArtistChange={handleArtistChange}
          />
          <h2 className={styles.concertsHeader}>
            {`${artistName}'s upcoming concerts`}
            <Arrow
              direction={"down"}
              width={15}
              color={{ color: colorPaletteDark }}
            />
          </h2>
          <EventContainer artistName={artistName} color={color} />
          <Footer />
        </main>
        <div className={styles.songRightCol}>
          <section className={styles.profileDetails}>
            <h2 className={styles.profileDetailsHeader}>Played at:</h2>
            <p
              className={styles.profileDetailsAnswer}
              style={{
                backgroundColor: colorPaletteLight,
              }}
            >
              {currentSong
                ? new Date(currentSong.played_at).toLocaleString()
                : "loading..."}
            </p>
            <h2 className={styles.profileDetailsHeader}>Popularity score:</h2>
            <p
              className={styles.profileDetailsAnswer}
              style={{ backgroundColor: colorPaletteLight }}
            >
              {currentSong ? currentSong.track.popularity : "loading..."}
            </p>
          </section>
          <section className={styles.listeningHistory}>
            <h2 className={styles.cardTitle}>Listening History:</h2>
            <div className={styles.songHistoryContainer}>
              {songs.map((song, index) => (
                <SongContainer
                  key={index}
                  currentSong={song}
                  size={"small"}
                  handleSongChange={handleSongChange}
                />
              ))}
            </div>
            <button className={styles.logoutBtn} onClick={logout}>
              logout
            </button>
          </section>
        </div>
      </div>
    );
  }
}
