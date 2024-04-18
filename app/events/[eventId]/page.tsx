import { Button, Container, Link } from "@chakra-ui/react";
import dayjs from "dayjs";

export default function EventHomePage() {
  const event = {
    id: 1,
    title: "Long Event",
    start: dayjs("2024-04-15T13:45:00-05:00").toDate(),
    end: dayjs("2024-04-15T14:45:00-05:00").toDate(),
  };

  return (
    <Container>
      <h1>This is the event {event.title}</h1>
      <Button>
        <Link href="/events/1">Visit event 1</Link>
      </Button>
    </Container>
  );
}
