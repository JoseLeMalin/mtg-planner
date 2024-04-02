"use client";

import { createDeckNextAction } from "@/src/actions/decks/decks.actions";
import { getRequiredAuthSession } from "@/src/lib/auth";
import { getUTCDatePostGres } from "@/src/lib/utils/dayjs/functions.utils";
import { DeckInfered } from "@/src/types/decks.types";
import {
  Button,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { FormEvent, Fragment, PropsWithChildren, useState } from "react";

type DeckFormEdit = {
  defaultValue?: {
    deck: DeckInfered & {
      id: string;
    };
  };
};

enum DeckType {
  COMMANDER = "Commander",
  STANDARD = "standard",
  OTHER = "other",
}

export default async function DeckEditForm({ defaultValue }: DeckFormEdit) {
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
  };
  // revalidatePath(`/decks/${deck.id}`);
  // redirect(`/decks/${deck.id}`);

  return (
    <Fragment>
      <RadioGroup value={deckType} onChange={handleDeckTypeChange}>
        <Stack direction="row">
          <Radio value={DeckType.COMMANDER}>COMMANDER</Radio>
          <Radio value={DeckType.STANDARD}>STANDARD</Radio>
          <Radio value={DeckType.OTHER}>OTHER</Radio>
        </Stack>
      </RadioGroup>
      <div className="flex">
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
      </div>
    </Fragment>
  );
}
