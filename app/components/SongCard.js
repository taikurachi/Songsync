import styles from "../page.module.css";
import SongContainer from "./SongContainer";
import EventContainer from "./EvenContainer";
import Image from "next/image";
import spotifyImage from "../public/images/spotify.svg";
import ticketmasterImage from "../public/images/ticketmaster.png";
import SongChangeBtn from "./SongChangeBtn";
import { useEffect, useState } from "react";
import ColorThief from "colorthief";
import getColorPalette from "../utils/getColorPalette";
import Arrow from "./Arrow";

export default function SongCard({ songs }) {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [artistName, setArtistName] = useState("");
  const [artistIndex, setArtistIndex] = useState(0);
  const [songIndex, setSongIndex] = useState(0);
  const [color, setColor] = useState([]);

  const setDominantColor = (url) => {
    if (url) {
      const img = new window.Image();
      img.src = url;
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        setColor(color);
      };
    }
  };
  useEffect(() => {
    if (songs && songs.length > 0) {
      const currentSong = songs[songIndex];
      const imageUrl = currentSong.track?.album.images[2].url;
      setDominantColor(imageUrl);
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
            <Arrow
              direction={"left"}
              width={10}
              color={`rgba(${getColorPalette(color, 1)})`}
            />
            View previous
          </SongChangeBtn>
          <SongChangeBtn
            onClick={handleArtistChange}
            backgroundColor={`rgba(${getColorPalette(color, 0.5)})`}
          >
            Change artist
          </SongChangeBtn>
          <SongChangeBtn onClick={() => handleSongChange("next")}>
            View next
            <Arrow
              direction={"right"}
              width={10}
              color={`rgba(${getColorPalette(color, 1)})`}
            />
          </SongChangeBtn>
        </div>

        <div className={styles.songCard}>
          <h1 className={styles.cardTitle}>
            Recently played song
            <span style={{ color: `rgba(${getColorPalette(color, 1)})` }}>
              :
            </span>
          </h1>
          <SongContainer currentSong={currentSong} />
          <h2 className={styles.concertsHeader}>
            {`${artistName}'s upcoming concerts`}
            <Arrow
              direction={"down"}
              width={15}
              color={`rgba(${getColorPalette(color, 1)})`}
            />
          </h2>
          <EventContainer artistName={artistName} color={color} />
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
