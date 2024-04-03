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

export default function CardUserInfos({ children }: PropsWithChildren) {
  return (
    <>
      <Container as={Stack} maxW={"7xl"} py={4} spacing={4} className="flex">
        <Box className="flex">
          <Card>
            <CardHeader>Your decks:</CardHeader>
            <CardBody>
              <Box></Box>
            </CardBody>
          </Card>
        </Box>
      </Container>
    </>
  );
}
