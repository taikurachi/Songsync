import styles from "../page.module.css";

export default function SongChangeBtn({ children, onClick }) {
  return (
    <p onClick={onClick} className={styles.songChangeBtn}>
      {children}
    </p>
  );
}
