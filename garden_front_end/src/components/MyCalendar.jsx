import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    start: new Date(),
    end: new Date(moment().add(1, 'days')),
    title: 'Event 1',
  },
  {
    start: new Date(moment().add(2, 'days')),
    end: new Date(moment().add(3, 'days')),
    title: 'Event 2',
  },
];

const MyCalendar = () => {
  const [eventsData, setEventsData] = useState(events);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter event title:');
    if (title) {
      setEventsData([...eventsData, { start, end, title }]);
    }
  };

  const handleDelete = (eventToDelete) => {
    setEventsData(
      eventsData.filter((event) => event !== eventToDelete)
    );
  };

  return (
    <Calendar
      localizer={localizer}
      events={eventsData}
      startAccessor="start"
      endAccessor="end"
      onSelectSlot={handleSelect}
      selectable
      resizable
      onEventResize={handleUpdate}
      onEventDrop={handleUpdate}
      onSelectEvent={(event) =>
        handleDelete(event)
      }
    />
  );
};

export default MyCalendar;
