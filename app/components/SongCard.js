import styles from "../page.module.css";
import SongContainer from "./SongContainer";
import EventContainer from "./EvenContainer";
import Image from "next/image";
import spotifyImage from "../public/images/spotify.svg";
import ticketmasterImage from "../public/images/ticketmaster.png";
import { useEffect, useState } from "react";

export default function SongCard({ songs }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [artistName, setArtistName] = useState("");
  let index = 0;

  useEffect(() => {
    if (songs && songs.length > 0) {
      const currentSong = songs[0];
      setCurrentSong(currentSong);
      const artists = currentSong.track?.artists ?? [];
      if (artists.length > 0) setArtistName(artists[0].name);
    }
  }, [songs]);

  const handleClick = () => {
    if (!currentSong) return;
    console.log("song was clicked");
    const artists = currentSong.track?.artists ?? [];
    index = index < artists.length - 1 ? index + 1 : 0;
    console.log(index);
    setArtistName(artists[index].name);
  };
  {
    return songs.length === 0 || !currentSong ? (
      <p>Loading song data...</p>
    ) : (
      <div onClick={handleClick} className={styles.songCard}>
        <h1 className={styles.cardTitle}>Recently played song:</h1>
        <SongContainer currentSong={currentSong} />
        <h2>{artistName}'s upcoming concerts</h2>
        <EventContainer currentSong={currentSong} />
        <p className={styles.credits}>
          <span>Powered</span>
          <span>by</span>
          <Image
            src={spotifyImage}
            alt="spotify logo"
            height={20}
            className={styles.creditsImg}
          />
          <span>&</span>
          <Image
            src={ticketmasterImage}
            alt="ticketmaster logo"
            height={15}
            className={styles.creditsImg}
          />
        </p>
      </div>
    );
  }
}
