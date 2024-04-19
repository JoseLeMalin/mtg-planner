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
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
  Tag,
  Text,
  Tooltip,
  useCheckboxGroup,
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
  const listOfPeople = [
    "People 1",
    "People 2",
    "People 3",
    "People 4",
    "People 5",
    "People 6",
    "People 7",
    "People 8",
    "People 9",
    "People 10",
  ];
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ["2"],
  });
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
      <Card className="event-form-card" mx={2} w={"50%"}>
        <CardHeader
          className="event-form-card-header"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          Event: {name}
        </CardHeader>
        <CardBody
          className="event-form-card-body"
          display={"flex"}
          flexDirection={"column"}
          gap={6}
          px={2}
        >
          <Flex
            className="date-icons"
            direction={"column"}
            justifyContent={"space-between"}
          >
            <Flex className="date-created" flexDirection={"row-reverse"}>
              <Tooltip label="Created on">
                <FilePlus2 size={15} />
              </Tooltip>
              <Text fontSize="xs">
                {createdAt ? formatDDMMYYYY(createdAt) : ""}
              </Text>
            </Flex>
            {updatedAt ? (
              <Flex
                className="date-icons-updated"
                flexDirection={"row-reverse"}
              >
                <Tooltip label="Last update">
                  <FilePenLine size={15} />
                </Tooltip>
                <Text fontSize="xs">{formatDDMMYYYY(updatedAt)}</Text>
              </Flex>
            ) : (
              ""
            )}
          </Flex>
          <Flex className="event-form" direction={"column"} gap={6} w={"full"}>
            <form onSubmit={handleSubmit(handleEditEvent)}>
              <FormControl
                className="event-form-control"
                flexDirection={"column"}
                isInvalid={!!errors.name}
              >
                <Heading as="h1" size="sm">
                  Event Title
                </Heading>
                <FormLabel flexShrink={1} htmlFor="name">
                  <Input
                    /* defaultValue={name} */
                    id="name"
                    {...register("name", { required: true, maxLength: 100 })}
                    placeholder="Event name"
                    size="md"
                  />
                </FormLabel>

                <Heading as="h3" size="sm">
                  Choose the persons to invite
                </Heading>

                {/* Begin invitedPeopleList */}
                <Flex direction={"column"} wrap={"wrap"} gap={6}>
                  <Heading as="h3" size="sm">
                    Invited People
                  </Heading>
                  <Box className="invited-people-tags">
                    {invitedPeopleList.map((person, index) => {
                      return <Tag key={index}>{person}</Tag>;
                    })}
                  </Box>

                  <Box
                    className="invited-people-accordion"
                    display={"flex"}
                    flexDirection={"row"}
                    flexWrap={"wrap"}
                  >
                    <CheckboxGroup
                      colorScheme="green"
                      onChange={(e) => {
                        console.log(value);

                        setInvitedPeopleList(() => e.sort() as string[]);
                      }}
                    >
                      <Stack
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={[1, 5]}
                        wrap={"wrap"}
                        direction={["column", "row"]}
                      >
                        {listOfPeople.map((person, index) => {
                          return (
                            <Checkbox key={`${person}-${index}`} value={person}>
                              {person}
                            </Checkbox>
                          );
                        })}
                      </Stack>
                    </CheckboxGroup>
                  </Box>
                </Flex>

                {/* End invitedPeopleList */}
                <Flex
                  className="event-form-image"
                  direction={"row"}
                  gap={6}
                  my={3}
                >
                  <Heading flexBasis={6 / 12} as="h3" size="sm">
                    Image link
                  </Heading>
                  <Input
                    flexBasis={6 / 12}
                    /* defaultValue={image} */
                    {...register("image", { required: true })}
                    id="image"
                    placeholder="Image link"
                    size="md"
                  />
                </Flex>
                <Container className={"my-3"}>
                  <Button type="submit">Submit</Button>
                </Container>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
            </form>
          </Flex>
          <Flex borderWidth={"3px"} borderColor={"black"}>
            {" "}
            Another Box
          </Flex>
        </CardBody>
      </Card>
    </Fragment>
  );
}
