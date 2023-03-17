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
    const {get: view_get} = useFetch("view-udalosti");
    const {get: node_get} = useFetch("jsonapi/node/");
    const [isLoading, setIsLoading] = useState(false);
    const [eventsList, setEventsList] = useState([]);
    const [eventDetail, setEventDetail] = useState("");

    useEffect(() => {
        setIsLoading(true);
        view_get("")
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
                        udalost_uuid: event.uuid,
                        turnaj_uuid: event.uuid_1,
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
        // alert(JSON. stringify(calEvent));
        console.log(calEvent);
        const endpoint = calEvent.turnaj_uuid ? `turnaj/${calEvent.turnaj_uuid}` : `udalost/${calEvent.udalost_uuid}`;

        node_get(endpoint)
        .then(data => {
            const fields = data.data.attributes;
            console.log(fields);
            setEventDetail({
                title: calEvent.title,
                content: fields.body.value
            });
        });
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
                {eventDetail && <div className="k64cal-detail">
                    <h2>{eventDetail.title}</h2> 
                    <div className="k64cal-detail-content" dangerouslySetInnerHTML={{__html: eventDetail.content}} />
                </div>}
            </div>
        </div>
    )
}