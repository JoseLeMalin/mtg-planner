"use client";

import { getUTCDatePostGres } from "@/src/lib/utils/dayjs/functions.utils";
import { Box } from "@chakra-ui/react";
import dayjs from "dayjs";
import { Dispatch, PropsWithChildren, SetStateAction, useState } from "react";
import Calendar from "react-calendar";

// CSS
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type TUserCalendar = {
  date?: Date;
  updateDate: Dispatch<SetStateAction<Date>>;
} & PropsWithChildren;

export default function UserCalendar({
  date,
  updateDate,
  children,
}: TUserCalendar) {
  const [value, setValue] = useState(dayjs(date).toDate());
  console.log("value date change ? ", date);

  const handleOnChange = (nextValue: Value) => {
    console.log("Value?: ", nextValue);
    updateDate((prev)=>dayjs(nextValue?.toString()).toDate());
    // if (!nextValue) {
    //   return;
    // }
    // const test = nextValue.toString();
    // setValue(dayjs(test).toDate());
  };
  return (
    <Box className="flex w-full">
      <Calendar
        defaultActiveStartDate={dayjs(value?.toString()).toDate()}
        locale="en-GB" //https://stackoverflow.com/questions/75112338/react-calendar-prop-aria-label-did-not-match-server-december-26-2022-clie
        minDate={getUTCDatePostGres("2024-01-01")}
        maxDate={getUTCDatePostGres(dayjs().add(3, "y").toDate())}
        onChange={handleOnChange}
        value={date}
      />
      <div>{children}</div>
    </Box>
  );
}
