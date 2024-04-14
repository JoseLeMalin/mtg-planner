"use client";
import { getUTCDatePostGres } from "@/src/lib/utils/dayjs/functions.utils";
import { Box, Card, CardBody, CardHeader } from "@chakra-ui/react";
import { Value } from "@prisma/client/runtime/library";
import dayjs from "dayjs";
import { PropsWithChildren, useCallback, useState } from "react";
import { Calendar, dayjsLocalizer, View, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = dayjsLocalizer(dayjs);
export default function CardBigCalendar({ children }: PropsWithChildren) {
  const [value, setValue] = useState(getUTCDatePostGres());
  const [view, setView] = useState<View>(Views.MONTH);
  const [date, setDate] = useState(dayjs().toDate());
  const onNavigate = useCallback(
    (newDate: Date) => setDate(newDate),
    [setDate],
  );

  const [myEvents, setEvents] = useState<
    {
      id: number;
      title: string;
      start: Date;
      end: Date;
    }[]
  >([]);
  const onView = useCallback((newView: View) => setView(newView), [setView]);
  const onDrillDown = useCallback(
    (newDate: Date) => {
      setDate(newDate);
      setView(Views.AGENDA);
    },
    [setDate, setView],
  );
  const events = [
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
  const handleOnChange = (nextValue: Value) => {
    console.log("Value?: ", nextValue);

    if (!nextValue) {
      return;
    }
    const test = nextValue.toString();
    setValue(dayjs(test).toDate());
  };
  const handleSelectEvent = useCallback(
    (event: { id: number; title: string; start: Date; end: Date }) =>
      window.alert(event.title),
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
    <Box className="flex w-full">
      <Card>
        <CardHeader>Big Calendar</CardHeader>
        <CardBody>
          <Calendar
            date={date}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            events={events}
            onDrillDown={onDrillDown}
            onView={onView}
            onNavigate={onNavigate}
            view={view}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            style={{ height: 1000, width: "auto" }}
            selectable
          />
        </CardBody>
      </Card>
      {children}
    </Box>
  );
}
