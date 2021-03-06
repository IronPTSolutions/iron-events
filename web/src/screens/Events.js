import { Fragment } from "react";
import { useTranslation } from 'react-i18next';
import EventsList from '../components/events/EventsList';

function Events() {
  const { t } = useTranslation()
  return (
    <Fragment>
      <h3 className="mb-3">{t('Events.title')}</h3>
      <EventsList />
    </Fragment>
  );
}

export default Events;
