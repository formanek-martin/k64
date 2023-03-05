import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function KobyCalendar() {
    const localizer = momentLocalizer(moment);
    return (
        <div className="k-grid">
            <div className="k-grid--center">
                <Calendar
                    localizer={localizer}
                    // events={myEventsList}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </div>
        </div>
    )
}