import { useConvertDateToString } from "@/src/hooks/useConvertDateToString";
import { getUTCFormattedDate } from "@/src/lib/utils/dayjs/functions.utils";
import { schemaDeck, schemaDeckArray } from "@/src/types/decks.types";
import { Deck } from "@prisma/client";
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
  const decksReworked = decks.map((deckItem) =>
    useConvertDateToString(deckItem),
  );
  const parsedDecks = await schemaDeckArray.safeParseAsync(decksReworked);
  if (!parsedDecks.success) return [];

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
  if (!parsedDeck.success) return [];

  return parsedDeck.data;
};
