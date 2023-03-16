import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import { useState, useEffect, useCallback } from "react";
import { Helmet } from 'react-helmet-async';
import dayjs from 'dayjs';
import useFetch from "../../../helpers/useFetch.js";
import Loader from "../../elements/Loader/Loader.js";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './KobyCalendar.css';

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
                    const duration = event.field_cas_udalosti_duration;
                    tempList.push({
                        title: event.field_udalost_title,
                        start: new Date(eventDate * 1000),
                        end: new Date((eventDate  * 1000) + (duration * 60 * 1000)),
                        allDay: duration >= 1439 ? true : false,
                        udalost_id: event.nid,
                        turnaj_id: event.nid_1,
                        kategory_color: event.field_barva_kategorie || event.field_barva_kategorie_1
                    });
                });
            });
            // console.log(tempList);
            setEventsList(tempList);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }, []);

    const onSelectEvent = useCallback((calEvent) => {
        alert(JSON. stringify(calEvent));
    }, []);

    const eventPropGetter = useCallback((event) => ({
        ...({
            style: {
                backgroundColor: event.kategory_color,
            }
        }),
    }), []);

    return (
        <div className="k-grid k64cal">
            <Helmet>
                <title>Šachy Kobylisy | Kalendář</title>
            </Helmet>
            <div className="k-grid--center">
                <div className="k64cal-wrapper">
                    {isLoading ? <Loader /> : <Calendar
                            localizer={localizer}
                            events={eventsList}
                            startAccessor="start"
                            endAccessor="end"
                            min = {new Date(1972, 0, 1, 9, 0, 0, 0)}
                            max = {new Date(1972, 0, 1, 22, 0, 0, 0)}
                            onSelectEvent={onSelectEvent}
                            eventPropGetter={eventPropGetter}
                            style={{ minHeight: 500 }}
                        />
                    }
                </div>
            </div>
        </div>
    )
}