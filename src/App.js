import React from "react";
import "./App.css";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export default class App extends React.Component {
  render() {
    return (
      <FullCalendar
        defaultView="dayGridMonth"
        dateClick={this.handleDateClick}
        select={this.handleSelectClick}
        selectable="true"
        plugins={[dayGridPlugin]}
        events={[
          {
            title: "event 1",
            allDay: true,
            start: "2021-11-18",
            end: "2021-11-18",
          },
          {
            title: "event 2",
            allDay: true,
            start: "2021-11-18",
            end: "2021-11-18",
          },
        ]}
      />
    );
  }
}
