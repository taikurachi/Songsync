import styles from "../page.module.css";
export default function EventsItem({ event }) {
  const dateInfo = new Date(event.dates.start.localDate);
  const eventLocationInfo = event._embedded.venues[0];

  const dayOfWeek = dateInfo.toLocaleDateString("en-US", { weekday: "short" });
  const date = dateInfo.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });
  const time = new Date(
    `1970-01-01T${event.dates.start.localTime}`
  ).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  const city = eventLocationInfo.city.name;
  const venue = eventLocationInfo.name;

  return (
    <div className={styles.eventsItem}>
      <p className={styles.eventsDate}>{date}</p>
      <div className={styles.eventsRightCol}>
        <p className={styles.eventsCity}>{city}</p>
        <p
          className={styles.eventsTimeVenue}
        >{`${dayOfWeek} ${time} • ${venue}`}</p>
      </div>
    </div>
  );
}
