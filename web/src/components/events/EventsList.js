import { useState, useEffect } from 'react';
import EventItem from './EventItem';

import eventsService from '../../services/events-service';

function EventsList() {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // componentDidMount

    async function fetchEvents() {
      const events = await eventsService.list();
      if (!isUnmounted) {
        setEvents(events)
      }
    }

    let isUnmounted = false;
    fetchEvents();

    return () => {
      // componentWillUnmount
      isUnmounted =  true;
    }
  }, []); // no tiene dependencias para volver a ejecutarse
  
  return (
    <div className="row row-cols-4">
      {events.map(event => (
        <div key={event.id} className="col mb-4"><EventItem event={event} /></div>
      ))}
    </div>
  )
}

export default EventsList;
