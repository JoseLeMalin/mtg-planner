"use client";

import {
  getUTCDatePostGres,
  getUTCFormattedDate,
} from "@/src/lib/utils/dayjs/functions.utils";
import dayjs from "dayjs";
import { PropsWithChildren, useState } from "react";
import Calendar from "react-calendar";
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
    <div>
      <Calendar
        defaultActiveStartDate={value}
        minDate={getUTCDatePostGres(getUTCFormattedDate("2023-01-01"))}
        maxDate={getUTCDatePostGres(getUTCFormattedDate("2025-01-01"))}
        onChange={handleOnChange}
        value={value}
      />
      {children}
    </div>
  );
}
