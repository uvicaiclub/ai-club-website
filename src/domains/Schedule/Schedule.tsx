import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import events from './events'

const localizer = momentLocalizer(moment)

const Schedule = () => {
  return (
    <div>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          step={60}
          views={['month', 'agenda']}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
        />
      </div>
      <div className="pt-2">
        <div className="h3 pt-2">
          Club Meetings - Tuesdays 6:00pm in ECS 128
        </div>
        <p>
          Every week the AI Club meets to discuss plans, code changes, and
          progress. Come be a part of our wonderful and talented community by
          taking time to attend and meet our team of talented programmers.
          Newcomers welcome!
        </p>
        <div className="h3 pt-2">
          Hackathon - June 18th, 12:00 pm in ECS 128
        </div>
        <p>
          The club is hosting a hackathon to focus on developing club software
          and our NN battlesnake, food and beverages will be provided!
        </p>
        <div className="h3 pt-2">
          Battlesnake Tournament - June 25th, 12:00 pm in ECS 128
        </div>
        <p>
          We'll be hosting our own Battlesnake tournament this year for club
          participants. Food, beverages, and prizes are available!
        </p>
      </div>
    </div>
  )
}

export default Schedule
