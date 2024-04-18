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
    <Container mx={"auto"} minW={"fit-content"} w={"50%"}>
      <EventEditForm defaultValue={{ event }} />
    </Container>
  );
}
