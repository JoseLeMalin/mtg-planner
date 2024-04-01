"use client";

import React from "react";
//import Slider from "@ant-design/react-slick";
import { getUTCFormattedDate } from "@/src/lib/utils/dayjs/functions.utils";
import { v4 } from "uuid";
import { Deck } from "@/src/components/home/Home";

// https://github.com/akiran/react-slick/issues/1837
// https://github.com/akiran/react-slick/issues/1837
//https://www.youtube.com/watch?v=WvIo6Kzvk4k
// console.log("css: ", csstheme);
// console.log("css: ", css);

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

export default function SliderTest() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative h-screen flex-1 md:flex">
      {/* <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}
    </div>
  );
}

/*

{/* <div>
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
                    {/* <ButtonGroup spacing="2">
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
      </div>
         */
