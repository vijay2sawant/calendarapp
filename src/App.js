import React from "react";
import "./App.css";
import img from "./weather-ico.png";
//Importing FullCalendar Module
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

//Importing axios service
import axios from "axios";

import events from "./events";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    //const events = [{ title: "today's event", date: new Date() }];
    function renderEvent(eventInfo) {
      return (
        <div>
          <p>Sales: {eventInfo.event.extendedProps.sales}</p>
          <p>Round Off: {eventInfo.event.extendedProps.roff}</p>
          <img className="eventimage" src={img} />
        </div>
      );
    }

    function dayRender(date, cell) {
      cell.append("<span class='hoverEffect' '>+</span>");
    }

    return (
      <FullCalendar
        defaultView="dayGridMonth"
        dateClick={this.handleDateClick}
        select={this.handleSelectClick}
        selectable="true"
        plugins={[dayGridPlugin]}
        eventContent={renderEvent}
        dayRender={dayRender}
        events={events}
      />
    );
  }
}
