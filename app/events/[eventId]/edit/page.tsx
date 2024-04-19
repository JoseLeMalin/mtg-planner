import { getRequiredAuthSession } from "@/src/lib/auth";
import { Center } from "@chakra-ui/react";

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
    /* <Container
      className="event-edit-page"
      display={"flex"}
      alignContent={"center"}
      justifyContent={"center"}
      mx={0}
      px={0}
      w={"50%"}
      minW={"fit-content"}
    > */

    <Center
      className="event-edit-page"
      mx={0}
      px={0}
      w={"50%"}
      minW={"fit-content"}
    >
      <EventEditForm defaultValue={{ event }} />
    </Center>
  );
}
