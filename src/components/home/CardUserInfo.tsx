import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Link,
  Stack,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import DecksList from "./DecksList";
import UserCalendar from "./CardCalendar";

export default function HomeUserInfos({ children }: PropsWithChildren) {
  return (
    <>
    <Container as={Stack} maxW={"6xl"} py={4} spacing={4} className="flex">

      <Box className="flex">
        <Card>
          <CardHeader>Your decks:</CardHeader>
          <CardBody>
            <Box>
              <DecksList />
            </Box>
          </CardBody>
        </Card>
      </Box>
      <Box className="flex">
        <Card>
          <CardHeader>Your events:</CardHeader>
          <CardBody>
            <Box>
              <UserCalendar />
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Container>
    </>
  );
}
