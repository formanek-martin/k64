import {Calendar, dayjsLocalizer} from 'react-big-calendar';
import {useState, useEffect, useCallback} from "react";
import {Helmet} from 'react-helmet';
import dayjs from 'dayjs';
import useFetch from "../../../helpers/useFetch.js";
import Loader from "../../elements/Loader/Loader.js";
import 'react-big-calendar/lib/css/react-big-calendar.css';

require('dayjs/locale/cs');
dayjs.locale('cs');
const localizer = dayjsLocalizer(dayjs);

export default function KobyCalendar() {
    const {get} = useFetch("view-udalosti");
    const [isLoading, setIsLoading] = useState(false);
    const [eventsList, setEventsList] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        get("")
        .then(data => {
            // console.log(data);
            const tempList = [];
            data.forEach(event => {
                console.log("event");
                console.log(event);
                event.field_cas_udalosti.forEach(eventDate => {
                    tempList.push({
                        title: event.title,
                        start: new Date(eventDate * 1000),
                        end: new Date((eventDate  * 1000) + (2*60*60*1000)), //TODO: replace with real value from JSON or leave with default +2h
                        resource: "test test test",
                        something: "fdsafsafdasfd"
                    });
                });
            });
            console.log(tempList);
            
            setEventsList(tempList);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, []);

    const onSelectEvent = useCallback((calEvent) => {
        console.log(calEvent);
    }, []);

    return (
        <div className="k-grid">
            <Helmet>
                <title>Šachy Kobylisy | Kalendář</title>
            </Helmet>
            <div className="k-grid--center">
                {isLoading ? <Loader /> : <Calendar
                        localizer={localizer}
                        events={eventsList}
                        startAccessor="start"
                        endAccessor="end"
                        onSelectEvent={onSelectEvent}
                        style={{ minHeight: 500 }}
                    />
                }
            </div>
        </div>
    )
}