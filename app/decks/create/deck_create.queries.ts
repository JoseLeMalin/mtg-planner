import { DeckCreate, schemaDeck } from "@/src/types/decks.types";
import { Deck } from "@prisma/client";
import { prisma } from "src/lib/prisma";

export const createUserDeck = async (newDeck: DeckCreate) => {
  const deck = await prisma.deck.create({
    data: { ...newDeck },
  });

  const parsedDeck = await schemaDeck.safeParseAsync(deck);
  if (!parsedDeck.success) return [];

  return parsedDeck.data;
};
