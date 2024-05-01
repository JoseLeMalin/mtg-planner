"use client";

import { Badge, Box, Circle, Flex, Tooltip } from "@chakra-ui/react";
import { Party } from "@prisma/client";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

type RatingProps = {
  rating: number;
  numReviews: number;
};

type TListParties = {
  parties: Party[];
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

export const DisplayListParties = ({ parties }: TListParties) => {
  return (
    <>
      <Flex
        gap={4}
        alignItems={"center"}
        justifyItems={"center"}
        wrap={"wrap"}
        overflow={"auto"}
      >
        {parties?.map((party) => (
          <Box
            key={party.id}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
          >
            {party.id && (
              <Circle
                size="10px"
                position="absolute"
                top={2}
                right={2}
                bg="green.200"
              />
            )}

            {party?.image ? (
              <Image
                blurDataURL={party.image}
                width={200}
                height={100}
                placeholder="blur"
                src={party.image}
                alt={`Picture of ${party.name}`}
              />
            ) : (
              ""
            )}

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
                  <ShoppingCart size={30} />
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
      </Flex>
    </>
  );
};
