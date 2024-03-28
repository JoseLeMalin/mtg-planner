"use client";

import { getUTCFormattedDate } from "@/src/lib/utils/dayjs/functions.utils";
import dayjs from "dayjs";
import { PropsWithChildren, useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function UserCalendar({ children }: PropsWithChildren) {
  const [value, setValue] = useState(dayjs().toDate());

  const handleOnChange =(nextValue: Value) => {
    if (!nextValue) {
        return 
    }
    const test = nextValue.toString()
    setValue(dayjs(test).toDate())
  }
  return (
    <div>
      <Calendar onChange={handleOnChange} value={value} />
    </div>
  );
}
