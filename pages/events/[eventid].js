import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/ui/error-alert";

import {getEventById} from "@/dummy-data";
import {useRouter} from "next/router";
import {Fragment} from "react";

function AllEventsPage() {
    const router = useRouter();

    const eventId = router.query.eventid;
    const event = getEventById(eventId);

    if (!eventId) {
        return (
            <ErrorAlert>
                <p>No Event Found</p>
            </ErrorAlert>
        );
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
}

export default AllEventsPage;
