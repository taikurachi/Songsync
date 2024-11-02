import Image from "next/image";
import spotifyImage from "../public/images/spotify.svg";
import ticketmasterImage from "../public/images/ticketmaster.png";
import styles from "../page.module.css";

export default function Footer() {
  return (
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
  );
}
