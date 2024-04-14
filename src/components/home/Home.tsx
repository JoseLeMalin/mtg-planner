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
import { Suspense } from "react";
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

export default async function HomeComponent() {
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
                <CardBigCalendar />
              </Box>
            </CardBody>
          </Card>
        </Suspense>
      </Box>
    </Container>
  );
}
