import Image from "next/image";
import spotifyImage from "../public/images/spotify.png";
import ticketmasterImage from "../public/images/ticketmaster.png";
import styles from "../page.module.css";
import Link from "next/link";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.credits}>
        <span>Powered</span>
        <span>by</span>
        <Image
          src={spotifyImage}
          alt="spotify logo"
          height={35}
          className={styles.creditsImg}
        />
        <span>&</span>
        <Image
          src={ticketmasterImage}
          alt="ticketmaster logo"
          height={20}
          className={styles.creditsImg}
        />
      </p>
      <Link className={styles.spotifyLink} href="https://open.spotify.com/">
        OPEN SPOTIFY
      </Link>
      <div className={styles.footerLinks}>
        <Link className={styles.links} href="/privacy">
          Privacy notice
        </Link>
        <Link className={styles.links} href="/endUserAgreement">
          End user agreement
        </Link>
      </div>
    </div>
  );
}
