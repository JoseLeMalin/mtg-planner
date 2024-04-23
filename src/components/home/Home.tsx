/* eslint-disable tailwindcss/classnames-order */
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Link,
  Spinner,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { Suspense } from "react";
import ModalIntercept from "../ModalIntercept";
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

type EventCalendar = { id: number; title: string; start: Date; end: Date };
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
      // minH={"75dvh"}
      // display={"flex"}
      // flexDir={"column"}
      w={"full"}
      minW={"full"}
      h={"full"}
      minH={"full"}
      bg={"pink"}
    >
      <Flex
        flexDir={{
          base: "column",
          md: "row",
        }}
        wrap={"wrap"}
        gap={10}
        w={"full"}
        bg={"gray.300"}
        my={4}
        ps={"10"}
        pe={"10"}
      >
        <Suspense fallback={<Spinner />}>
          <Card w={"30%"} flexShrink={1}>
            <CardHeader>Your Activity:</CardHeader>
            <CardBody>
              <Button>
                <Link href="/events">Events</Link>
              </Button>
            </CardBody>
          </Card>
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Card w={"30%"} flexShrink={0}>
            <CardHeader>Your events:</CardHeader>
            <CardBody>
              <Button>
                <Link href="/events">Events</Link>
              </Button>
            </CardBody>
          </Card>
          <Card w={"30%"} flexShrink={0}>
            <CardHeader>Trigger modal event 1:</CardHeader>
            <CardBody>
              <Button>
                <Link href="/events/1/edit">Event 1 Modal</Link>
              </Button>
            </CardBody>
          </Card>
        </Suspense>
        {/* </Box> */}
      </Flex>
      <Box className="box-home-modal-btn">
        <ModalIntercept params="dfsdfdsf" />
      </Box>
      <Box
        my={4}
        display={"flex"}
        w={"full"}
        flexBasis={12}
        flexDir={"row"}
        bg={"gray-light"}
      >
        <Suspense fallback={<Spinner />}>
          <Card className="inherit bg-black my-4 flex w-full flex-row">
            <CardHeader>Your Calendar:</CardHeader>
            <CardBody>
              <Box>
                <CardBigCalendar events={events} />
              </Box>
            </CardBody>
          </Card>
        </Suspense>
      </Box>

      {/* <Box
        display={"flex"}
        flexBasis={12}
        flexDir={"row"}
        my={4}
        w={"full"}
        bg={"red"}
      > */}
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
      {/* <Box
        my={4}
        display={"flex"}
        w={"full"}
        flexBasis={12}
        flexDir={"row"}
        bg={"gray-dark"}
      > */}
    </Container>
  );
}
