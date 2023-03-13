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
                        title: event.field_udalost_title,
                        start: new Date(eventDate * 1000),
                        end: new Date((eventDate  * 1000) + (event.field_cas_udalosti_duration * 60 * 1000)),
                        udalost_id: event.nid,
                        turnaj_id: event.nid_1,
                        kategory_id: event.field_ref_kategorie
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
        alert(JSON. stringify(calEvent));
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