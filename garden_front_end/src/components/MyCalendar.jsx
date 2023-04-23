import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Popover, TextField, Button } from "@mui/material";


export default function MyCalendar({ initialEvents }) {
  const [eventsData, setEventsData] = useState(
    JSON.parse(localStorage.getItem("eventsData")) || initialEvents.events
  );
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    localStorage.setItem("eventsData", JSON.stringify(eventsData));
  }, [eventsData]);

  const handleSelectEvent = (event) => setSelectedEvent(event);

  const handleSelectSlot = ({ start, end }) =>
    setSelectedEvent({ start, end, title: "" });

  const handlePopoverClose = () => setSelectedEvent(null);

  const handleEventEdit = (newEvent) => {
    const updatedEvents = eventsData.map((event) => {
      if (event === selectedEvent) {
        return newEvent;
      }
      return event;
    });
    setEventsData(updatedEvents);
    console.log("updated events:", updatedEvents);
    handlePopoverClose();
  };

  const handleEventDelete = (eventToDelete) => {
    setEventsData(eventsData.filter((event) => event !== eventToDelete));
  };

  const handleNewEventSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    if (selectedEvent && title.trim() !== "") {
      setEventsData([
        ...eventsData,
        {
          start: selectedEvent.start,
          end: selectedEvent.end,
          title,
        },
      ]);
      handlePopoverClose();
    }
  };

  return (
    <div>
      <Calendar
        localizer={momentLocalizer(moment)}
        events={eventsData}
        views={["month"]}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        style={{ height: "100vh" }}
        className="my-calendar"
      />
      {selectedEvent && (
        <Popover
          open
          anchorEl={selectedEvent}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <form onSubmit={handleNewEventSubmit}>
            <div style={{ padding: "20px" }}>
              <TextField
                label="Event Title"
                variant="outlined"
                fullWidth
                margin="normal"
                name="title"
                defaultValue={selectedEvent?.title}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handlePopoverClose();
                  const title =
                    document.querySelector("form").elements.title.value;
                  handleEventEdit({
                    ...selectedEvent,
                    title: title,
                  });
                }}
                className="edit-button"
              >
                Edit Event
              </Button>

              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleEventDelete(selectedEvent)}
                style={{ marginLeft: "10px" }}
              >
                Delete Event
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Add Event
              </Button>
            </div>
          </form>
        </Popover>
      )}
    </div>
  );
}
