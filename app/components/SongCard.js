import styles from "../page.module.css";
import SongContainer from "./SongContainer";
import EventContainer from "./EvenContainer";
import Image from "next/image";
import spotifyImage from "../public/images/spotify.svg";
import ticketmasterImage from "../public/images/ticketmaster.png";
import SongChangeBtn from "./SongChangeBtn";
import { useEffect, useState } from "react";

export default function SongCard({ songs }) {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [artistName, setArtistName] = useState("");
  const [artistIndex, setArtistIndex] = useState(0);
  const [songIndex, setSongIndex] = useState(0);

  useEffect(() => {
    if (songs && songs.length > 0) {
      const currentSong = songs[songIndex];
      console.log(currentSong);
      setCurrentSong(currentSong);
      setArtistIndex(0);
      const artists = currentSong.track?.artists ?? [];
      if (artists.length > 0) setArtistName(artists[0].name);
    }
  }, [songs, songIndex]);
  const handleSongChange = (direction) => {
    if (direction === "next")
      setSongIndex((index) => (index > 0 ? index - 1 : songs.length - 1));
    else if (direction === "previous")
      setSongIndex((index) => (index < songs.length - 1 ? index + 1 : 0));
  };
  const handleArtistChange = () => {
    if (!currentSong) return;
    const artists = currentSong.track?.artists ?? [];
    setArtistIndex((prevIndex) => {
      const newIndex = prevIndex < artists.length - 1 ? prevIndex + 1 : 0;
      setArtistName(artists[newIndex].name);
      return newIndex;
    });
  };

  {
    return songs?.length === 0 ? (
      <p>No songs available</p>
    ) : (
      <div>
        <div className={styles.btnContainer}>
          <SongChangeBtn onClick={() => handleSongChange("previous")}>
            View previous
          </SongChangeBtn>
          <SongChangeBtn onClick={() => handleSongChange("next")}>
            View next
          </SongChangeBtn>
        </div>

        <div onClick={handleArtistChange} className={styles.songCard}>
          <h1 className={styles.cardTitle}>Recently played song:</h1>
          <SongContainer currentSong={currentSong} />
          <h2>{artistName}'s upcoming concerts</h2>
          <EventContainer artistName={artistName} />
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
      </div>
    );
  }
}
