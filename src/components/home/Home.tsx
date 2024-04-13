/* eslint-disable tailwindcss/classnames-order */
import { getAuthSession } from "@/src/lib/auth";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Link,
  Spacer,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { PropsWithChildren, Suspense } from "react";
import { getUTCFormattedDate } from "@/src/lib/utils/dayjs/functions.utils";
import { v4 } from "uuid";
import DecksList from "./DecksList";
import UserCalendar from "./CardCalendar";
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

const decks: Deck[] = [
  {
    id: v4(),
    name: "deck 1",
    image: "",
    nbCards: 100,
    commander: "Vraska",
    createdAt: getUTCFormattedDate(),
    nbVictories: 0,
  },
  {
    id: v4(),
    name: "deck 2",
    image: "",
    nbCards: 100,
    commander: "Prossh",
    createdAt: getUTCFormattedDate(),
    nbVictories: 0,
  },
  {
    id: v4(),
    name: "deck 3",
    image: "",
    nbCards: 100,
    commander: "",
    createdAt: getUTCFormattedDate(),
    nbVictories: 0,
  },
  {
    id: v4(),
    name: "deck 4",
    image: "",
    nbCards: 100,
    commander: "Vraska",
    createdAt: getUTCFormattedDate(),
    nbVictories: 0,
  },
];

export default async function HomeComponent({ children }: PropsWithChildren) {
  return (
    <Container
      className="min-h-75dvh flex w-full min-w-full flex-col bg-pink py-4"
      // display="flex"
      // w={"full"}
      // minW={"100%"}
      // minH={"75dvh"}
      // flexDirection={"row"}
      // bg={"blue"}
      // py={4}
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

      <Box className="my-4 flex w-full basis-12 flex-row bg-blue">
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
      </Box>
      <Box className="my-4 flex w-full basis-12 flex-row bg-gray-light">
        <Suspense fallback={<Spinner />}>
          <Card className="inherit bg-black my-4 flex w-full flex-row">
            <CardHeader>Your events:</CardHeader>
            <CardBody>
              <Box>
                <CardBigCalendar />
              </Box>
            </CardBody>
          </Card>
        </Suspense>
      </Box>
    </Container>
  );
}
