import { ButtonAuthSignIn } from "@/src/components/ButtonSignIn";
import { getRequiredAuthSession } from "@/src/lib/auth";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Editable,
  EditableInput,
  EditablePreview,
  Stat,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import { IoCreate } from "react-icons/io5";
import { PiFilePlusBold } from "react-icons/pi";
import { HiOutlineWrench } from "react-icons/hi2";
import Link from "next/link";
import { Fragment, Suspense } from "react";
import { getUserDecks } from "./decks.queries";
import Image from "next/image";
import { StatsCard } from "@/src/components/decks/StatCard";
import {
  formatDDMMYYYY,
  getUTCFormattedDate,
} from "@/src/lib/utils/dayjs/functions.utils";

export default async function DeckList() {
  const session = await getRequiredAuthSession();
  const userId = session?.user.id;

  const decks = await getUserDecks({ userId });
  console.log("decks to display2: ", decks);

  return (
    <Fragment>
      {!session.user.id ? (
        <div className="flex">
          <h1>Please connect first</h1>
          <ButtonAuthSignIn />
        </div>
      ) : (
        <>
          <div className="flex">
            {/* <Layout className={"flex size-full flex-col space-x-5 md:flex"}> */}
            <Link href={"/decks/create"}>
              <Button>Create new deck</Button>
            </Link>

            {/* </Layout> */}
          </div>
          <div>
            <Suspense>
              <Card colorScheme="red" variant="outline">
                <CardHeader>Your decks </CardHeader>
                <CardBody>
                  <Box>
                    {/* <Box className="border-3 flex bg-orange"> */}
                    {/* <DecksList decks={decks} /> */}

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
                                <Editable defaultValue={deckItem.name}>
                                  <EditablePreview />
                                  <EditableInput />
                                </Editable>
                                <Editable
                                  defaultValue={deckItem.nbCards.toString()}
                                >
                                  <EditablePreview />
                                  <EditableInput />
                                </Editable>
                                <div className="m-4">
                                  <Image
                                    // src="https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
                                    src="https://plus.unsplash.com/premium_photo-1706625695400-75c979c48c5d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    width="100"
                                    height="100"
                                    priority={false}
                                    alt={`Deck ${deckItem.name} picture`}
                                  />
                                </div>
                                <div className="flex flex-row">
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
                                </div>
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
          </div>
        </>
      )}
    </Fragment>
  );
}
