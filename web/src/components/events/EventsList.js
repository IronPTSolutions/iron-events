import { Component } from 'react';
import EventItem from './EventItem';

import eventsService from '../../services/events-service';

class EventsList extends Component {

  state = {
    events: []
  }

  componentDidMount() {
    eventsService.list()
      .then(events => this.setState({ events }))
      .catch(error => console.error(error))
  }

  render() {
    const { events } = this.state;

    return (
      <div className="row row-cols-4">
        {events.map(event => (
          <div key={event.id} className="col mb-4"><EventItem event={event} /></div>
        ))}
      </div>
    )
  }
}

export default EventsList;
