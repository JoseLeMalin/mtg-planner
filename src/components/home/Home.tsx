import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
  Stack,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export default function HomeComponent({ children }: PropsWithChildren) {
  return (
    <Stack
      spacing={4}
      display={"flex"}
      height={"100%"}
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <Card>
        <CardHeader>Home</CardHeader>
        <CardBody>
          <Button>
            <Link href="/admin"> Admin Page</Link>
          </Button>
          {children}
        </CardBody>
      </Card>
    </Stack>
  );
}
