"use client";

import {
  createEventNextAction,
  updateEventNextAction,
} from "@/src/actions/events/events.actions";
import UserCalendar from "@/src/components/home/CardCalendar";
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
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Tag,
  TagCloseButton,
  Text,
  Tooltip,
  useCheckboxGroup,
  useToast,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { FilePenLine, FilePlus2, SquareX } from "lucide-react";
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
  const [eventDate, setEventDate] = useState<Date>(dayjs().toDate());

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
      <Card
        className="event-edit-form-card"
        display={"flex"}
        flexShrink={0}
        w={"full"}
        h={"full"}
      >
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
          flexShrink={0}
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
                <FormLabel flexShrink={1}>
                  <Heading as="h1" size="sm">
                    Event Date
                  </Heading>
                </FormLabel>

                <Input
                  type="date"
                  {...(register("start"),
                  {
                    value: dayjs(eventDate).format("YYYY-MM-DD").toString(),
                    onChange: (e) => {
                      e.preventDefault();
                      console.log("ici ?", dayjs(e.target.value).toDate());

                      setEventDate(dayjs(e.target.value).toDate());
                    },
                  })}
                />
                <UserCalendar
                  date={eventDate}
                  // events={[
                  //   {
                  //     id: 0,
                  //     title: "Event de la journée",
                  //     start: dayjs().toDate(),
                  //     end: dayjs().toDate(),
                  //   },
                  // ]}
                />
                <FormHelperText>
                  {"We'll never share your email."}
                </FormHelperText>
              </FormControl>
              {/* Begin invitedPeopleList */}
              <Flex marginTop={4} direction={"column"} wrap={"wrap"} gap={6}>
                <Flex direction={["column", "row"]} wrap={"wrap"} gap={2}>
                  <Heading as="h3" size="sm">
                    Invited People
                  </Heading>
                  <Flex
                    className="invited-people-tags"
                    direction={["column", "row"]}
                    wrap={"wrap"}
                    gap={2}
                  >
                    {invitedPeopleList.map((person, index) => {
                      return (
                        <Tag key={index}>
                          {person}
                          <TagCloseButton
                            onClick={(e) => {
                              e.preventDefault();
                              setInvitedPeopleList((prev) =>
                                prev.filter((p) => p !== person),
                              );
                            }}
                          />
                        </Tag>
                      );
                    })}
                  </Flex>
                  {invitedPeopleList.length > 0 ? (
                    <SquareX onClick={() => setInvitedPeopleList([])} />
                  ) : (
                    ""
                  )}
                </Flex>

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
                      alignContent={"center"}
                      justifyContent={"center"}
                      spacing={[1, 5]}
                      wrap={"wrap"}
                      direction={["column", "row"]}
                    >
                      {listOfPeople.map((person, index) => {
                        if (invitedPeopleList.includes(person)) {
                          return;
                        }
                        return (
                          <Checkbox
                            flexBasis={"30%"}
                            key={`${person}-${index}`}
                            value={person}
                          >
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
                <Heading as="h3" size="sm">
                  Image link
                </Heading>
                <Input
                  /* defaultValue={image} */
                  {...register("image", { required: false })}
                  id="image"
                  placeholder="Image link"
                  size="md"
                />
              </Flex>
              <Container display={"flex"} justifyContent={"center"}>
                <Button type="submit">Submit</Button>
              </Container>
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </form>
          </Flex>
        </CardBody>
      </Card>
    </Fragment>
  );
}
