import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  Link,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { Fragment, PropsWithChildren, Suspense } from "react";
import image from "src/assets/images/dfc-ignite.svg";
import { getUTCFormattedDate } from "@/src/lib/utils/dayjs/functions.utils";
import { v4 } from "uuid";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import { PencilRuler, Trash2 } from "lucide-react";

type Deck = {
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

export default function UserDecklist({ children }: PropsWithChildren) {
  return (
    <Stack
      spacing={4}
      display={"flex"}
      height={"100%"}
      direction={{ base: "column", md: "row" }}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      {decks.map((deckItem) => {
        return (
          <Fragment key={deckItem.id}>
            <Card maxW="sm" borderWidth={2}>
              <CardHeader>{deckItem.name}</CardHeader>
              <CardBody>
                <Suspense fallback={<Spinner />}>
                  <Image
                    src="https://picsum.photos/seed/pyc5slS3R2/640/480"
                    alt={`Deck ${deckItem.name} picture`}
                    width={80}
                    height={80}
                    priority={false}
                  />
                </Suspense>
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>Nb cards: {deckItem.nbCards}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    Nb victories: {deckItem.nbVictories}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    <PencilRuler />
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    <Trash2 strokeWidth={1.75} />
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Fragment>
        );
      })}
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
