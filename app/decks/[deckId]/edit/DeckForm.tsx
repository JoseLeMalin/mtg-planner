"use client";

import { createDeckNextAction } from "@/src/actions/decks/decks.actions";
import { getUTCDatePostGres } from "@/src/lib/utils/dayjs/functions.utils";
import { DeckInfered } from "@/src/types/decks.types";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { FormEvent, Fragment, useState } from "react";

type DeckFormEdit = {
  defaultValue?: {
    deck: DeckInfered & {
      id: string;
    };
  };
};

enum DeckType {
  COMMANDER = "Commander",
  STANDARD = "Standard",
  OTHER = "Other",
}

export default function DeckEditForm({ defaultValue }: DeckFormEdit) {
  const {
    id,
    name,
    commander,
    createdAt,
    nbCards,
    image,
    nbDefeats,
    nbVictories,
  } = {
    ...defaultValue?.deck,
  };

  // const session = await getRequiredAuthSession();
  const [deckType, setDeckType] = useState<DeckType>(DeckType.COMMANDER);
  const handleDeckTypeChange = async (formatType: DeckType) => {
    setDeckType(formatType);
  };

  const handleCreateDeck = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    // const deck = { id: "dflngk" };
    const name = formData.get("name") as string;
    const commander = formData.get("commander") as string;
    const image = formData.get("image") as string;
    const nbCards = formData.get("nbCards") as string;

    if (!id) {
      console.log("ici ?", {
        name,
        nbCards: parseInt(nbCards),
        commander,
        image,
        ownerId: "cluibebcn0000ufdxdpol42vk",
        createdBy: "cluibebcn0000ufdxdpol42vk",
        createdAt: getUTCDatePostGres(),
      });
      return await createDeckNextAction({
        data: {
          name,
          nbCards: parseInt(nbCards),
          commander,
          image,
          ownerId: "cluibebcn0000ufdxdpol42vk",
          createdBy: "cluibebcn0000ufdxdpol42vk",
          createdAt: getUTCDatePostGres(),
        },
      });
    }

    // await updateCourseNextAction({
    //   data: {
    //     name,
    //     image,
    //     presentation,
    //   },
    //   courseId: id,
    // });
    // revalidatePath(`/decks/${deck.id}`);
    // redirect(`/decks/${deck.id}`);
  };

  return (
    <Fragment>
      <Card display={"flex"} minW={"75%"} mx={4}>
        <CardHeader>
          <RadioGroup value={deckType} onChange={handleDeckTypeChange}>
            <Stack direction="row">
              <Radio value={DeckType.COMMANDER}>{DeckType.COMMANDER}</Radio>
              <Radio value={DeckType.STANDARD}>{DeckType.STANDARD}</Radio>
              <Radio value={DeckType.OTHER}>{DeckType.OTHER}</Radio>
            </Stack>
          </RadioGroup>
        </CardHeader>
        <CardBody display={"flex"} flexDirection={"column"}>
          <Box display={"flex"}>
            <form onSubmit={(e) => handleCreateDeck(e)}>
              <Heading as="h3" size="sm">
                Deck Name
              </Heading>
              <Input
                defaultValue={name}
                name="name"
                id="name"
                placeholder="Deck name"
                size="md"
              />
              {deckType === DeckType.COMMANDER ? (
                <>
                  <Heading as="h3" size="sm">
                    Commander
                  </Heading>
                  <Input
                    defaultValue={commander}
                    name="commander"
                    id="name"
                    placeholder="commander"
                    size="md"
                  />
                </>
              ) : (
                ""
              )}
              <Heading as="h3" size="sm">
                Nb Cards
              </Heading>
              <Input
                defaultValue={nbCards}
                name="nbCards"
                id="nbCards"
                placeholder="Nb cards"
                size="md"
              />
              <Heading as="h3" size="sm">
                Image link
              </Heading>
              <Input
                defaultValue={image}
                name="image"
                id="image"
                placeholder="Image link"
                size="md"
              />
              <Button type="submit">Submit</Button>
            </form>
          </Box>
          <Box display={"flex"}>
            sgjkbskgk
          </Box>
        </CardBody>
      </Card>
    </Fragment>
  );
}
