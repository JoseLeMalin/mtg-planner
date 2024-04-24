import { getRequiredAuthSession } from "@/src/lib/auth";
import {
  Badge,
  Box,
  Circle,
  Container,
  Flex,
  Image,
  Tooltip,
} from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { getUserEvents } from "./events.queries";
type RatingProps = {
  rating: number;
  numReviews: number;
};

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

export default async function EventsHomePage() {
  const session = await getRequiredAuthSession();
  const userId = session?.user.id;
  const parties = await getUserEvents();
  return (
    <Container
      w={"full"}
      minW={"full"}
      flexDir={"column"}
      alignItems={"center"}
      justifyItems={"center"}
    >
      <h1>This is the event EventHomePage</h1>
      <Flex gap={4} alignItems={"center"} justifyItems={"center"}>
        {parties?.map((party) => (
          <Box
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            key={party.id}
          >
            {party.id && (
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="red.200"
              />
            )}

            <Image
              src={
                party?.image
                  ? party.image
                  : "https://picsum.photos/seed/pyc5slS3R2/640/480"
              }
              alt={`Picture of ${party.id}`}
              roundedTop="lg"
            />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                {party.id && (
                  <Badge
                    rounded="full"
                    px="2"
                    fontSize="0.8em"
                    colorScheme="red"
                  >
                    New
                  </Badge>
                )}
              </Box>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {party.name}
                </Box>
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  {/* <chakra.a href={"#"} display={"flex"}> */}
                  <ShoppingCart size={7} />
                  {/* </chakra.a> */}
                </Tooltip>
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                <Rating rating={1} numReviews={500} />
                <Box fontSize="2xl">
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    £
                  </Box>
                  2000
                </Box>
              </Flex>
            </Box>
          </Box>
        ))}
        {/* <Card key={event.id}>
          <CardHeader>{event.name}</CardHeader>
          <CardBody>{event.startDate}</CardBody>
          <CardFooter>
            <Link href={`/events/${event.id}`}>
              <Button key={event.id}>Visit event {event.type}</Button>
            </Link>
          </CardFooter>
        </Card> */}
      </Flex>
    </Container>
  );
}
