"use client";
import { getUTCDatePostGres } from "@/src/lib/utils/dayjs/functions.utils";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  useDisclosure,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { PropsWithChildren, useCallback, useState } from "react";
import { Calendar, dayjsLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ModalEventContent from "./ModalEventContent";

type EventCalendar = { id: number; title: string; start: Date; end: Date };
const events: EventCalendar[] = [
  {
    id: 1,
    title: "Long Event",
    start: dayjs("2024-04-15T13:45:00-05:00").toDate(),
    end: dayjs("2024-04-15T14:45:00-05:00").toDate(),
  },
  {
    id: 2,
    title: "Long Event",
    start: dayjs("2024-04-14T13:45:00-05:00").toDate(),
    end: dayjs("2024-04-14T14:45:00-05:00").toDate(),
  },
  {
    id: 3,
    title: "Long Event",
    start: dayjs("2024-04-16T13:45:00-05:00").toDate(),
    end: dayjs("2024-04-17T14:45:00-05:00").toDate(),
  },
];
type TCardBigCalendar = {
  events: EventCalendar[];
} & PropsWithChildren;

const localizer = dayjsLocalizer(dayjs);
export default function CardBigCalendar({
  events,
  children,
}: TCardBigCalendar) {
  const [value, setValue] = useState(getUTCDatePostGres());
  const [eventModal, setEventModal] = useState<EventCalendar>();
  const [view, setView] = useState<View>(Views.MONTH);
  const [date, setDate] = useState(dayjs().toDate());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onNavigate = useCallback(
    (newDate: Date) => setDate(newDate),
    [setDate],
  );
  const [myEvents, setEvents] = useState<EventCalendar[]>([]);
  const onView = useCallback((newView: View) => setView(newView), [setView]);
  const onDrillDown = useCallback(
    (newDate: Date) => {
      setDate(newDate);
      setView(Views.AGENDA);
    },
    [setDate, setView],
  );

  // const handleOnChange = (nextValue: Value) => {
  //   console.log("Value?: ", nextValue);
  //
  //   if (!nextValue) {
  //     return;
  //   }
  //   const test = nextValue.toString();
  //   setValue(dayjs(test).toDate());
  // };
  const handleSelectEvent = useCallback(
    (event: { id: number; title: string; start: Date; end: Date }) => {
      //window.alert(event.title),
      setEventModal({ ...event });
      onOpen();
    },
    [],
  );
  const handleSelectSlot = useCallback(
    ({ start, end }: { start: Date; end: Date }) => {
      const title = window.prompt("New Event name");
      if (title) {
        setEvents((prev) => [
          ...prev,
          { id: prev?.length + 1, start, end, title },
        ]);
      }
    },
    [setEvents],
  );
  return (
    <Box display={"flex"} w={"full"} h={"full"}>
      <Card>
        <CardHeader>Big Calendar</CardHeader>
        <CardBody display={"flex"} w={"full"} h={"full"}>
          <Calendar
            defaultDate={dayjs().toDate()}
            date={date}
            localizer={localizer}
            // startAccessor="start"
            // endAccessor="end"
            events={events}
            onDrillDown={onDrillDown}
            onView={onView}
            onNavigate={onNavigate}
            view={view}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            style={{ width: 1000, minWidth: 500 }}
            selectable
          />
        </CardBody>
      </Card>

      <ModalEventContent onOpen={onOpen} onClose={onClose} isOpen={isOpen}>
        <div>
          <p>test modal n2</p>
          <p>{eventModal?.id}</p>
        </div>
      </ModalEventContent>

      {/*       <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>test modal</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      {children}
    </Box>
  );
}
