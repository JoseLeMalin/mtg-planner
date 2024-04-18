import { ButtonAuthSignIn } from "@/src/components/ButtonSignIn";
import { StatsCard } from "@/src/components/decks/StatCard";
import { getRequiredAuthSession } from "@/src/lib/auth";
import { formatDDMMYYYY } from "@/src/lib/utils/dayjs/functions.utils";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, Suspense } from "react";
import { HiOutlineWrench } from "react-icons/hi2";
import { IoAddSharp } from "react-icons/io5";
import { PiFilePlusBold } from "react-icons/pi";
import { getUserDecks } from "./decks.queries";

export default async function DeckList() {
  const session = await getRequiredAuthSession();
  const userId = session?.user.id;

  const decks = await getUserDecks({ userId });

  return (
    <Fragment>
      {!session.user.id ? (
        <div className="flex">
          <h1>Please connect first</h1>
          <ButtonAuthSignIn />
        </div>
      ) : (
        <Container minW={"full"} w={"full"}>
          <Suspense>
            <Card minW={"full"} w={"full"}>
              <CardHeader>
                <Flex
                  h={8}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  Your decks
                  <Box>
                    <Link href={"/decks/create"}>
                      <IoAddSharp size={"40px"} />
                    </Link>
                  </Box>
                </Flex>
              </CardHeader>
              <CardBody>
                <Box>
                  <Tabs variant="enclosed">
                    <TabList>
                      {decks.map((deckItem) => {
                        return (
                          <Fragment key={deckItem.id}>
                            <Tab>{deckItem.name}</Tab>
                          </Fragment>
                        );
                      })}
                    </TabList>
                    <TabPanels>
                      {decks.map((deckItem) => (
                        <TabPanel key={deckItem.id}>
                          <Card>
                            <CardBody>
                              {/* <Flex minWidth="max-content" alignItems="center"> */}
                              <Editable
                                className="basis-1/2"
                                defaultValue={deckItem.name}
                              >
                                <EditablePreview />
                                <EditableInput />
                              </Editable>
                              <Editable
                                className="basis-1/2"
                                defaultValue={deckItem.nbCards.toString()}
                              >
                                <EditablePreview />
                                <EditableInput />
                              </Editable>

                              <Spacer />
                              {/* </Flex> */}
                              <div className="m-4 basis-1">
                                <Image
                                  // src="https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
                                  src={
                                    deckItem?.image
                                      ? deckItem.image
                                      : "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
                                  }
                                  width="100"
                                  height="100"
                                  priority={false}
                                  alt={`Deck ${deckItem.name} picture`}
                                  loading="lazy"
                                />
                              </div>
                              {/* <div className="flex flex-row"> */}
                              <div className="flex basis-1/2 flex-row">
                                <PiFilePlusBold
                                  size={"1.5rem"}
                                  className="basis-1/4"
                                  title="Created on"
                                />
                                <Editable
                                  className="basis-3/4"
                                  defaultValue={formatDDMMYYYY(
                                    deckItem.createdAt,
                                  )}
                                >
                                  <EditablePreview />
                                  <EditableInput />
                                </Editable>
                              </div>
                              <div className="flex basis-1/2 flex-row">
                                {deckItem?.updatedAt ? (
                                  <>
                                    <HiOutlineWrench
                                      size={"1.5rem"}
                                      className="basis-1/4"
                                      title="Updated on"
                                    />

                                    <Editable
                                      className="basis-3/4"
                                      defaultValue={formatDDMMYYYY(
                                        deckItem.updatedAt,
                                      )}
                                    >
                                      <EditablePreview />
                                      <EditableInput />
                                    </Editable>
                                  </>
                                ) : (
                                  <HiOutlineWrench title="Last update" />
                                )}
                              </div>
                              {/* </div> */}
                              <Editable defaultValue={deckItem.name}>
                                <EditablePreview />
                                <EditableInput />
                              </Editable>
                              <div className="flex">
                                <StatsCard
                                  stat={
                                    deckItem.nbVictories
                                      ? deckItem.nbVictories?.toString()
                                      : "0"
                                  }
                                  title="Nb victories"
                                ></StatsCard>
                                <StatsCard
                                  stat={
                                    deckItem.nbDefeats
                                      ? deckItem.nbDefeats?.toString()
                                      : "0"
                                  }
                                  title="Nb Defeats"
                                ></StatsCard>
                              </div>
                            </CardBody>
                          </Card>
                          <Tab>blah {deckItem.name}</Tab>
                        </TabPanel>
                      ))}
                    </TabPanels>
                  </Tabs>
                </Box>
              </CardBody>
            </Card>
          </Suspense>
        </Container>
      )}
    </Fragment>
  );
}
