import { Fragment } from "react";
import EventsList from '../components/events/EventsList';

function Events() {
  return (
    <Fragment>
      <h3 className="mb-3">Best events in the area</h3>
      <EventsList />
    </Fragment>
  );
}

export default Events;
