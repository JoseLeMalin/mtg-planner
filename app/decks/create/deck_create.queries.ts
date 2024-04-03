import { DeckCreateInfered, schemaDeck } from "@/src/types/decks.types";
import { prisma } from "src/lib/prisma";

export const createUserDeck = async (newDeck: DeckCreateInfered) => {
  const deck = await prisma.deck.create({
    data: { ...newDeck },
  });

  const parsedDeck = await schemaDeck.safeParseAsync(deck);
  if (!parsedDeck.success) return [];

  return parsedDeck.data;
};
