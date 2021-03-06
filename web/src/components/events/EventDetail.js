import { useState, useEffect, Fragment, useContext } from 'react';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthStore';
import moment from 'moment';

import eventsService from '../../services/events-service';

function EventDetail() {

  const params = useParams();
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const [event, setEvent] = useState();

  /*
  Equivalencias entre componente funcional y de clase:

  - useEffect == componentDidMount
  - la función que devuelve useEffect == componentWillUnmount
  */
  useEffect(() => {
    // componentDidMount

    async function fetchEvent() {
      const { id } = params;
      console.info(`Feting event ${id}...`)
      const event = await eventsService.get(id)
      if (!isUnmounted) {
        // La promesa de 'eventsService.get' puede tardar mucho en resolverse y el usuario podría
        // decidir cambiar de ruta, debemos asegurarnos de que actualizamos el estado solo si el componente
        // sigue vivo.
        setEvent(event);
      }
    }

    let isUnmounted = false;
    fetchEvent();

    return () => {
      // componentWillUnmount
      console.info(`Unmounting component...`);
      isUnmounted = true;
    }
  }, [history, params]);
  // ^^ El segundo argumento representa el array de dependencias ([]), 
  // solo se volverá a ejecutar la función de useEffect cuando cambie el valor de una de sus dependecias 
  // (si está vacío solo se ejecutará una vez)


  const handleDeleteEvent = async () => {
    await eventsService.remove(event.id);
    history.push('/events');
  }

  if (!event) {
    return null;
  }

  const { image, title, description, tags, capacity, start, end, owner } = event;
  return (
    <Fragment>
      <div className="row row-cols-1 mb-4">
        <div className="col text-center">
          <img src={image} alt={title} className="img-fluid" />
        </div>
        <div className="col">
          <h1 className="mt-4 mb-2">{title}</h1>
          <div className="d-flex flex-row mb-2">
            <span className="badge rounded-pill bg-info me-2 p-2"><i className="fa fa-users me-1"></i>0 / {capacity}</span>
            <span className="badge rounded-pill bg-danger me-2 p-2"><i className="fa fa-clock-o me-1"></i>{moment(start).format('llll')} to {moment(end).format('llll')}</span>
          </div>
          <div className="text-muted fst-italic fw-light mb-2">By {owner.name}</div>
          {description.split('\n').map((p, i) => <p key={i}>{p}</p>)}
        </div>
        {tags && (
          <div className="col">
            {tags.map(tag => <span key={tag}>{<span className="badge rounded-pill bg-secondary me-2">{tag}</span>}</span>)}
          </div>
        )}
      </div>
      {user?.id === event.owner.id && (
        <div className="col my-3 text-center">
          <div className="alert alert-secondary" role="alert">
            <h4 className="fw-light mb-2">Admin Area</h4>
            <div className="btn-group" role="group">
              <Link className="btn btn-secondary" to={`/events/${event.id}/edit`}>Update</Link>
              <button type="button" className="btn btn-danger" onClick={handleDeleteEvent}>Delete</button>
            </div>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col">
          <Link to="/events" className="fw-lighter"><i className="fa fa-angle-left"></i> Back to Events</Link>
        </div>
      </div>
    </Fragment>
  );
}

export default EventDetail;
