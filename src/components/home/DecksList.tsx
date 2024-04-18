"use client";

import Slider from "@ant-design/react-slick";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  IconButton,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  ArrowBigLeftIcon,
  ArrowBigRightIcon,
  PencilRuler,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import { PropsWithChildren, Suspense, useState } from "react";
import { Deck } from "./Home";

type TUserDecklist = { decks: Deck[] } & PropsWithChildren;

const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function UserDecklist({ decks, children }: TUserDecklist) {
  const [slider, setSlider] = useState<Slider | null>(null);
  const [width, setWidth] = useState(1000);
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  /*
  const useWidth = () => {
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        //make sure it set properly on the first load (before resizing)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
        // the next line for linters, so they won't give a warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // empty
    return width
  }
*/

  return (
    <Box
      style={{
        width: width + "px",
      }}
      className="flex border-yellow"
      overflow={"auto"}
    >
      {/* <Stack
        spacing={4}
        display={"flex"}
        height={"100%"}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      > 
      {/* Left Icon */}
      <IconButton
        id="Left-IconButton"
        aria-label="IconButton"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <ArrowBigLeftIcon size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        id="Right-IconButton"
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <ArrowBigRightIcon size="40px" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {decks.map((deckItem, index) => {
          return (
            <Box
              key={`${deckItem.id}-${index}`}
              height={"50%"}
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
            >
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
                      loading="lazy"
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
            </Box>
          );
        })}
      </Slider>
      {/* </Stack> */}
    </Box>
  );
}

/*
  const useWidth = () => {
    const [width, setWidth] = useState(0)
    const handleResize = () => setWidth(window.innerWidth)
    useEffect(() => {
        //make sure it set properly on the first load (before resizing)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
        // the next line for linters, so they won't give a warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) // empty
    return width
  }
*/
