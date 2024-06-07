import EventList from "@/components/events/event-list";
import {getFeaturedEvents} from "@/dummy-data";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

function HomePage() {
    const featuredEvents = getFeaturedEvents();
    return (
        <div>
            <EventList items={featuredEvents} />
        </div>
    );
}

export default HomePage;
