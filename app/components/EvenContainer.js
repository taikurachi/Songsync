import { useEffect, useState } from "react";
import styles from "../page.module.css";
import EventsItem from "./EventsItem";

export default function EventContainer({ artistName, color }) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      const response = await fetch(
        `/api/ticketmaster?artistName=${encodeURIComponent(artistName)}`
      );
      const data = await response.json();

      if (data) {
        setEvents(data);
      }
    };
    getEvents();
  }, [artistName]);
  let content = null;
  if (events.length === 0) {
    content = <p>There are no upcoming events.</p>;
  } else if (!Array.isArray(events)) {
    content = <p>Events are loading...</p>;
  }
  return (
    <div className={styles.eventsGridContainer}>
      {events.length > 0 && Array.isArray(events)
        ? events.map((event, index) => (
            <EventsItem event={event} key={index} color={color} />
          ))
        : content}
    </div>
  );
}
