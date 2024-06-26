import { schemaDeck, schemaDeckArray } from "@/src/types/decks.types";
import { prisma } from "src/lib/prisma";

export const getUserDecks = async ({
  userId,
}: {
  userId: string;
  // userPage: number;
}) => {
  const decks = await prisma.deck.findMany({
    where: {
      ownerId: userId,
    },
  });
  // const decksReworked = decks.map((deckItem) =>
  //   useConvertDateToString(deckItem),
  // );
  const parsedDecks = await schemaDeckArray.safeParseAsync(decks);
  if (!parsedDecks.success) {
    console.log("Parsed error: ", parsedDecks.error);
    return [];
  }

  return parsedDecks.data;
};

export const getUserDeck = async ({
  deckId,
  userId,
  userPage,
}: {
  deckId: string;
  userId: string;
  userPage: number;
}) => {
  const deck = await prisma.deck.findUnique({
    where: {
      id: deckId,
      ownerId: userId,
    },
  });

  const parsedDeck = await schemaDeck.safeParseAsync(deck);
  if (!parsedDeck.success) throw new Error("Deck not found");

  return parsedDeck.data;
};
