import { getRequiredAuthSession } from "@/src/lib/auth";
import { Button, Container, Link } from "@chakra-ui/react";
import { getUserEvents } from "./events.queries";

export default async function EventsHomePage() {
  const session = await getRequiredAuthSession();
  const userId = session?.user.id;
  const events = await getUserEvents();
  return (
    <Container>
      <h1>This is the event EventHomePage</h1>
      {events?.map((event) => (
        <Link href={`/events/${event.id}`}>
          <Button key={event.id}>Visit event {event.type}</Button>
        </Link>
      ))}
    </Container>
  );
}
