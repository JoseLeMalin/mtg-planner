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

type TCardBigCalendar = {
  events: EventCalendar[];
} & PropsWithChildren;

const localizer = dayjsLocalizer(dayjs);
export default function CardBigCalendar({
  events,
  children,
}: TCardBigCalendar) {
  const [value, setValue] = useState(getUTCDatePostGres());
  const [eventModal, setEventModal] = useState<EventCalendar>({
    id: 0,
    title: "",
    start: new Date(),
    end: new Date(),
  });
  const [view, setView] = useState<View>(Views.MONTH);
  const [date, setDate] = useState(dayjs().toDate());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onNavigate = useCallback(
    (newDate: Date) => setDate(newDate),
    [setDate],
  );
  const [myEvents, setEvents] = useState<EventCalendar[]>([...events]);
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
    [setEventModal, onOpen],
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
  const customSlotPropGetter = (date: Date) => {
    if (date.getDate() === 7 || date.getDate() === 15)
      return {
        className: "bg-pink",
        // style: { "background-color": "red" },
      };
    else return {};
  };
  return (
    <Box display={"flex"} w={"full"} h={"full"} position={"relative"}>
      <Card display={"flex"}>
        <CardHeader>Big Calendar</CardHeader>
        <CardBody display={"flex"} w={"full"} h={"full"}>
          <Calendar
            defaultDate={dayjs().toDate()}
            date={date}
            localizer={localizer}
            // startAccessor="start"
            // endAccessor="end"
            events={myEvents}
            onDrillDown={onDrillDown}
            onView={onView}
            onNavigate={onNavigate}
            view={view}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            style={{ height: 500 }}
            selectable
            slotPropGetter={customSlotPropGetter}
          />
        </CardBody>
      </Card>

      <ModalEventContent
        event={eventModal!}
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      />

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
