import { getAuthSession } from "@/src/lib/auth";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
  Stack,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import HomeUserInfos from "./CardUserInfo";

export default async function HomeComponent({ children }: PropsWithChildren) {


  return (
    <Stack
      spacing={4}
      display={"flex"}
      height={"100%"}
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <HomeUserInfos />
      {children}
      {/* <Card>
        <CardHeader>Home</CardHeader>
        <CardBody>
          <Button>
            <Link href="/admin"> Admin Page</Link>
          </Button>
          {children}
        </CardBody>
      </Card> */}
    </Stack>
  );
}
