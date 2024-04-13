"use client";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import {
  getUTCDatePostGres,
  getUTCFormattedDate,
} from "@/src/lib/utils/dayjs/functions.utils";
import { PropsWithChildren, useState } from "react";
import { Value } from "@prisma/client/runtime/library";
import { Box, Card, CardBody, CardHeader } from "@chakra-ui/react";
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = dayjsLocalizer(dayjs);
export default function CardBigCalendar({ children }: PropsWithChildren) {
  const [value, setValue] = useState(getUTCDatePostGres());
  const events = [
    {
      start: dayjs().toDate(),
      end: dayjs("15-04-2024").toDate(),
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
  return (
    <Box className="flex w-full">
      <Card>
        <CardHeader>Big Calendar</CardHeader>
        <CardBody>
          <Calendar
            localizer={localizer}
            startAccessor="start"
            events={events}
            endAccessor="end"
            style={{ height: 300, width: "auto" }}
          />
        </CardBody>
      </Card>
    </Box>
  );
}
