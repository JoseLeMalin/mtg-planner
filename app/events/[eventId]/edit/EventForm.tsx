"use client";

import {
  createEventNextAction,
  updateEventNextAction,
} from "@/src/actions/events/events.actions";
import {
  formatDDMMYYYY,
  getUTCDatePostGres,
} from "@/src/lib/utils/dayjs/functions.utils";
import { EventCreateInfered, EventInfered } from "@/src/types/event.types";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  List,
  ListIcon,
  ListItem,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { FilePenLine, FilePlus2 } from "lucide-react";
import { Fragment, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type EventFormEdit = {
  defaultValue?: {
    event: EventInfered & {
      id: string;
    };
  };
};

export default function EventEditForm({ defaultValue }: EventFormEdit) {
  const {
    id,
    name,
    image,
    invitedPeople,
    start,
    end,
    createdAt,
    updatedAt,
    createdBy,
    ownerId,
  } = {
    ...defaultValue?.event,
  };
  const [invitedPeopleList, setInvitedPeopleList] = useState<string[]>(
    invitedPeople || [],
  );
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EventInfered>({
    defaultValues: {
      name,
      image,
      start,
      end,
      invitedPeople,
    },
  });

  // jund https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/d/d3/Jund.jpg/revision/latest?cb=20171022202928
  // const handleCreateDeck : SubmitHandler<Inputs>= async (e: FormEvent<HTMLFormElement>) => {
  const handleEditEvent: SubmitHandler<EventInfered> = async (data) => {
    const eventData: EventCreateInfered = {
      ...data,
      ownerId: "cluibebcn0000ufdxdpol42vk",
      createdBy: "cluibebcn0000ufdxdpol42vk",
      createdAt: getUTCDatePostGres(),
    };

    if (!id) {
      await createEventNextAction({
        data: eventData,
      });

      toast({ description: `Deck ${name} created`, status: "success" });
      return;
    }

    await updateEventNextAction({
      data: { ...eventData, id },
    });

    toast({ description: `Deck ${name} edited`, status: "success" });
  };

  return (
    <Fragment>
      <Card mx={2}>
        <CardHeader display={"flex"} justifyContent={"center"} alignItems={"center"}>
            Event: {name}
        </CardHeader>
        <CardBody display={"flex"} flexDirection={"column"} gap={6} px={2}>
          <Flex direction={"column"} justifyContent={"space-between"}>
            <Flex flexDirection={"row-reverse"}>
              <Tooltip label="Created on">
                <FilePlus2 size={15} />
              </Tooltip>
              <Text fontSize="xs">
                {createdAt ? formatDDMMYYYY(createdAt) : ""}
              </Text>
            </Flex>
            {updatedAt ? (
              <Flex flexDirection={"row-reverse"}>
                <Tooltip label="Last update">
                  <FilePenLine size={15} />
                </Tooltip>
                <Text fontSize="xs">{formatDDMMYYYY(updatedAt)}</Text>
              </Flex>
            ) : (
              ""
            )}
          </Flex>
          <Flex
            direction={"column"}
            justifyContent={"space-between"}
            gap={4}
            w={"full"}
          >
            <form onSubmit={handleSubmit(handleEditEvent)}>
              <FormControl flexDirection={"column"} isInvalid={!!errors.name}>
                <Heading as="h1" size="sm">
                  Event Title
                </Heading>
                <FormLabel flexShrink={1} htmlFor="name">
                  <Input
                    /* defaultValue={name} */
                    id="name"
                    {...register("name", { required: true, maxLength: 20 })}
                    placeholder="Deck name"
                    size="md"
                  />
                </FormLabel>

                <Heading as="h3" size="sm">
                  Choose the persons to invite
                </Heading>
                <Input
                  id="invitedPeople"
                  {...register("invitedPeople", { required: true })}
                />
                <List>
                  {invitedPeopleList.map((person, index) => {
                    return (
                      <ListItem key={index}>
                        {person}
                        <ListIcon color="green.500" />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      </ListItem>
                    );
                  })}
                </List>
                <Heading as="h3" size="sm">
                  Image link
                </Heading>
                <Input
                  /* defaultValue={image} */
                  {...register("image", { required: true })}
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
          </Flex>
          <Box display={"flex"} borderWidth={2}>
            Another Box
          </Box>
        </CardBody>
      </Card>
    </Fragment>
  );
}
