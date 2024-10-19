import { useEffect, useState } from "react";
import styles from "../page.module.css";
import EventsItem from "./EventsItem";

export default function EventContainer({ currentSong }) {
  const artist = currentSong.track.album.artists[0].name;
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      const response = await fetch(
        `/api/ticketmaster?artistName=${encodeURIComponent(artist)}`
      );
      const data = await response.json();

      if (data) {
        setEvents(data);
        console.log(data);
      }
    };
    getEvents();
  }, [artist]);

  return (
    <div className={styles.eventsGridContainer}>
      {events.map((event, index) => (
        <EventsItem event={event} key={index} />
      ))}
    </div>
  );
}
