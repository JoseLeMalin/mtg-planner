import { getRequiredAuthSession } from "@/src/lib/auth";
import { Container } from "@chakra-ui/react";

import { getEventInfos } from "./event.actions";
import EventEditForm from "./EventForm";

type FormValues = {
  firstName: string;
  lastName: string;
};

export default async function EventEditPage({
  params,
  searchParams,
}: {
  params: {
    eventId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getRequiredAuthSession();
  const event = await getEventInfos(params.eventId);

  return (
    <Container
      className="event-edit-page"
      display={"flex"}
      flexShrink={0}
      justifyContent={"center"}
      mx={6}
      px={0}
      w={"full"}
      minW={"80%"}
    >
      {/* <Center
      className="event-edit-page"
      mx={0}
      px={0}
      w={"75%"}
      minW={"max-content"}
      > 
      </Center> 
      */}
      <EventEditForm defaultValue={{ event }} />
    </Container>
  );
}
