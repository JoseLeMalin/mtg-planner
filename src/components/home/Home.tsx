import { getAuthSession } from "@/src/lib/auth";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Link,
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
  {
    /* <Stack
      spacing={4}
      display={"flex"}
      height={"100%"}
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    > */
  }
  return (
    <>
      {/* h={"100%"} w={"100%"} */}
      <Container className="flex flex-col space-y-4" w={"2500px"} mx={0} py={4}>
        <Box className="flex space-y-4 my-4 bg-blue" width={"1000px"}>
          <Suspense fallback={<Spinner />}>
            <Card
              className="w-full"
              colorScheme="red"
              size={"lg"}
              variant="outline"
            >
              <CardHeader>Your decks:</CardHeader>
              <CardBody>
                <Box className="w-full bg-orange border-3">
                  <DecksList decks={decks} />
                </Box>
              </CardBody>
            </Card>
          </Suspense>
        </Box>
        <Box className="flex">
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
      {/* <Card>
        <CardHeader>Home</CardHeader>
        <CardBody>
        <Button>
        <Link href="/admin"> Admin Page</Link>
        </Button>
        {children}
        </CardBody>
      </Card> */}
      {/* </Stack>  */}
    </>
  );
}
