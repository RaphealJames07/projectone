import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import {getFilteredEvents} from "@/dummy-data";
import {useRouter} from "next/router";
import {Fragment} from "react";

function FilteredEventsPage() {
    const router = useRouter();

    const {query} = router;
    console.log(query);

    const slugData = query.slug;
    if (!slugData) {
        return <p className="center">loading...</p>;
    }
    const year = slugData[0];
    const month = slugData[1];

    const numYear = +year;
    const numMonth = +month;

    if (
        isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear < 2019 ||
        numYear > 2024 ||
        numMonth < 1 ||
        numMonth > 12
    ) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p className="center">
                        Invalid Filter. Please adjust your values
                    </p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const filteredEvents = getFilteredEvents({year: numYear, month: numMonth});

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p className="center">
                        No events found for the chosen filter
                    </p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const date = new Date(numYear, numMonth - 1);

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
}

export default FilteredEventsPage;
