import { ListParties } from "@/src/components/parties/ListParties";
import { getRequiredAuthSession } from "@/src/lib/auth";
import { Button, Container, Flex, Link, Spacer } from "@chakra-ui/react";
import { IoAddSharp } from "react-icons/io5";
import { getUserEvents, getUserEventsPast } from "./events.queries";

export default async function EventsHomePage() {
  const session = await getRequiredAuthSession();
  const userId = session?.user.id;
  const [parties, pastParties] = await Promise.all([
    getUserEvents(),
    getUserEventsPast(),
  ]);
  return (
    <Container
      className="parties-list-page"
      w={"full"}
      h={"full"}
      minW={"full"}
      flexDir={"column"}
    >
      <Flex direction={"row"}>
        <h1>This is the event EventHomePage</h1>
        <Spacer />
        <Link href={"/events/create"}>
          <Button>
            <IoAddSharp size={"40px"} />
          </Button>
        </Link>
      </Flex>
      <ListParties parties={parties} partiesPast={pastParties} />
    </Container>
  );
}
