"use client";

import { getUTCDatePostGres } from "@/src/lib/utils/dayjs/functions.utils";
import { Box } from "@chakra-ui/react";
import dayjs from "dayjs";
import { PropsWithChildren, useState } from "react";
import Calendar from "react-calendar";

// CSS
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function UserCalendar({ children }: PropsWithChildren) {
  const [value, setValue] = useState(getUTCDatePostGres());

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
      <Calendar
        defaultActiveStartDate={value}
        locale="en-GB" //https://stackoverflow.com/questions/75112338/react-calendar-prop-aria-label-did-not-match-server-december-26-2022-clie
        minDate={getUTCDatePostGres("2024-01-01")}
        maxDate={getUTCDatePostGres(dayjs().add(3, "y").toDate())}
        onChange={handleOnChange}
        value={value}
      />
      <div>{children}</div>
    </Box>
  );
}
