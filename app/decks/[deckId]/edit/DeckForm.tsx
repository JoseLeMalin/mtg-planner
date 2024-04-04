"use client";

import { createDeckNextAction } from "@/src/actions/decks/decks.actions";
import { getUTCDatePostGres } from "@/src/lib/utils/dayjs/functions.utils";
import {
  DeckCreateInfered,
  DeckInfered,
  schemaDeckCreate,
} from "@/src/types/decks.types";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Stack,
  useToast,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { FormEvent, Fragment, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type DeckFormEdit = {
  defaultValue?: {
    deck: DeckInfered & {
      id: string;
    };
  };
};
type Inputs = {
  name: string;
  commander?: string;
  image: string;
  nbCards: number;
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

  const [deckType, setDeckType] = useState<DeckType>(DeckType.COMMANDER);
  const handleDeckTypeChange = async (formatType: DeckType) => {
    setDeckType(formatType);
  };

  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  // const handleCreateDeck : SubmitHandler<Inputs>= async (e: FormEvent<HTMLFormElement>) => {
  const handleCreateDeck: SubmitHandler<Inputs> = async (data) => {
    const dataEdit: DeckCreateInfered = {
      ...data,
      ownerId: "cluibebcn0000ufdxdpol42vk",
      createdBy: "cluibebcn0000ufdxdpol42vk",
      createdAt: getUTCDatePostGres(),
      nbCards: data.nbCards,
    };

    if (!id) {
      await createDeckNextAction({
        data: dataEdit,
      });
      toast({ description: `Deck ${name} created`, status: "success" });
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
            <form onSubmit={handleSubmit(handleCreateDeck)}>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="name">Deck details</FormLabel>
                <Heading as="h3" size="sm">
                  Deck Name
                </Heading>
                <Input
                  defaultValue={name}
                  {...register("name", { required: true, maxLength: 20 })}
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
                      {...register("commander", {
                        required: true,
                        maxLength: 20,
                      })}
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
                <NumberInput
                  defaultValue={nbCards ? nbCards : 0}
                  // min={0}
                  // max={20}
                  // name="nbCards"
                  id="nbCards"
                  size="md"
                  {...register("nbCards", { required: true, min: 0, max: 200 })}
                >
                  <NumberInputField />
                </NumberInput>
                <Heading as="h3" size="sm">
                  Image link
                </Heading>
                <Input
                  defaultValue={image}
                  {...register("image", { required: true })}
                  name="image"
                  id="image"
                  placeholder="Image link"
                  size="md"
                />
                <div className={"my-3"}>
                  <Button type="submit">Submit</Button>
                </div>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
            </form>
          </Box>
          <Box display={"flex"} borderWidth={2}>
            Another Box
          </Box>
        </CardBody>
      </Card>
    </Fragment>
  );
}
