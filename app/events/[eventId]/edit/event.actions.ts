import { schemaEvent } from "@/src/types/event.types";
import dayjs from "dayjs";

export const getEventInfos = async (eventId: string) => {
  // const event = await prisma.deck.findMany({
  //     where: {
  //         // eventId
  //         ownerId: eventId,
  //     },
  //   });
  // id: z.string(),
  // name: z.string(),
  // image: z.string().optional(),
  // invitedPeople: z.array(z.string()).optional(),
  // start: z.date(),
  // end: z.date(),
  // createdAt: z.date(),
  // updatedAt: z.date().optional(),
  // createdBy: z.string(),
  // ownerId: z.string(),
  const event = {
    id: "1",
    name: "Event retrieved from backend",
    start: dayjs().toDate(),
    end: dayjs().toDate(),
    createdAt: dayjs().toDate(),
    // updatedAt: ,
    createdBy: "José LeMalin",
    ownerId: "123456",
  };
  const parsedEvent = await schemaEvent.safeParseAsync(event);
  if (!parsedEvent.success) throw new Error("Event not found");

  return parsedEvent.data;
  // return {
  //     id: 1,
  //     title: "Long Event",
  //     start: dayjs("2024-04-15T13:45:00-05:00").toDate(),
  //     end: dayjs("2024-04-15T14:45:00-05:00").toDate(),
  // };
};
