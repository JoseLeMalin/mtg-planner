/* eslint-disable tailwindcss/classnames-order */
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Link,
  Spinner,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { Suspense } from "react";
import {
  Event,
} from "react-big-calendar";
import CardBigCalendar from "./CardBigCalendar";

export type Deck = {
  id: string;
  name: string;
  nbCards: number;
  image?: string;
  commander?: string;
  createdAt: string;
  nbVictories: number;
};

type EventCalendar = { id: number } & Event;
export default async function HomeComponent() {
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
  return (
    <Container
      minH={"75dvh"}
      display={"flex"}
      w={"full"}
      minW={"full"}
      flexDir={"column"}
      bg={"pink"}
    >
      <Box className=" my-4 flex w-full basis-12 flex-row bg-pink">
        <Suspense fallback={<Spinner />}>
          <Card className="inherit w-full flex bg-pink my-4 flex-row">
            <CardHeader>Your Activity:</CardHeader>
            <CardBody>
              <Box>
                {/* <DecksList decks={decks} /> */}
                <Link href="/decks"> Create new deck</Link>
              </Box>
            </CardBody>
          </Card>
        </Suspense>
      </Box>

      {/* <Box className="my-4 flex w-full basis-12 flex-row bg-blue">
        <Suspense fallback={<Spinner />}>
          <Card className="inherit bg-black my-4 flex w-full flex-row">
            <CardHeader>Your events:</CardHeader>
            <CardBody>
              <Box>
                <UserCalendar />
              </Box>
            </CardBody>
          </Card>
        </Suspense>
      </Box> */}
      <Box className="my-4 flex w-full basis-12 flex-row bg-gray-light">
        <Suspense fallback={<Spinner />}>
          <Card className="inherit bg-black my-4 flex w-full flex-row">
            <CardHeader>Your events:</CardHeader>
            <CardBody>
              <Box>
                <CardBigCalendar events={events} />
              </Box>
            </CardBody>
          </Card>
        </Suspense>
      </Box>
    </Container>
  );
}
