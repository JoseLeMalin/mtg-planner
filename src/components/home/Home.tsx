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
      display="flex"
      w={"full"}
      minW={"100%"}
      minH={"75dvh"}
      flexDirection={"row"}
      bg={"blue"}
      py={4}
    >
      <Suspense fallback={<Spinner />}>
        <Box display="flex" w={"full"} flexDirection={"row"} bg={"pink"} my={4}>
          <Card display="inherit" w={"full"} bg={"pink"} my={4}>
            <CardHeader>Your Activity:</CardHeader>
            <CardBody>
              <Box>
                {/* <DecksList decks={decks} /> */}
                <Link href="/decks"> Create new deck</Link>
              </Box>
            </CardBody>
          </Card>
        </Box>
      </Suspense>

      <Box
        display="flex"
        w={"full"}
        flexDirection={"column"}
        bg={"blue"}
        my={4}
      >
        <Suspense fallback={<Spinner />}>
          <Card>
            <CardHeader>Your events:</CardHeader>
            <CardBody>
              <Box>
                <UserCalendar />
              </Box>
            </CardBody>
          </Card>
        </Suspense>
      </Box>
      <div>{children}</div>
    </Container>
  );
}
