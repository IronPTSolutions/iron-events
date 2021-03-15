import moment from 'moment';
import { Link } from 'react-router-dom';

function EventItem({ event: { id, title, image, start } }) {
  return (
    <div class="card shadow-sm rounded-0 border-0">
      <img src={image} class="card-img-top" alt={title} />
      <div class="card-body">
        <span className="fw-lighter" style={{ color: '#d1410c', fontSize: '12px' }}>{moment(start).format('llll')}</span>
        <Link className="stretched-link link-unstyled" to={`/events/${id}`}><h5 class="card-title mt-2">{title}</h5></Link>
      </div>
    </div>
  )
}

export default EventItem;
