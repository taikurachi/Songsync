import styles from "../page.module.css";
import getColorPalette from "../utils/getColorPalette";
import checkLuminance from "../utils/checkLuminance";
import hexToRGBA from "../utils/hexToRGBA";

export default function EventsItem({ event, color }) {
  const dateInfo = new Date(event.dates.start.localDate);
  const eventLocationInfo = event._embedded?.venues[0];
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
  const city = eventLocationInfo?.city?.name;
  const venue = eventLocationInfo?.name;
  const colorPalette = `rgba(${getColorPalette(color, 0.5)})`;
  const textColorLuminance = checkLuminance(color) < 0.3 ? "#fff" : "#000";

  return (
    <div
      className={styles.eventsItem}
      style={{ backgroundColor: colorPalette, color: textColorLuminance }}
    >
      <p
        className={styles.eventsDate}
        style={{ backgroundColor: colorPalette }}
      >
        {date}
      </p>
      <div className={styles.eventsRightCol}>
        <p className={styles.eventsCity}>{city}</p>
        <p
          className={styles.eventsTimeVenue}
          style={{ color: `${hexToRGBA(textColorLuminance, 0.7)}` }}
        >
          {`${dayOfWeek} ${time} • ${venue}`}
        </p>
      </div>
    </div>
  );
}
