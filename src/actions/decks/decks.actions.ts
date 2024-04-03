"use server";

import { authAction } from "@/src/lib/actions";
import { schemaDeckCreate, schemaDeckUpdate } from "@/src/types/decks.types";
import { prisma } from "src/lib/prisma";
import { v4 } from "uuid";
import { z } from "zod";

const CourseActionEditProps = z.object({
  data: schemaDeckUpdate,
});

const DeckActionCreateProps = z.object({
  data: schemaDeckCreate,
});

export const createDeckNextAction = authAction(
  DeckActionCreateProps,
  async (props, { userId }) => {
    return await prisma.deck.create({
      data: { ...props.data, id: v4() },
    });
  },
);

export const updateDeckNextAction = authAction(
  CourseActionEditProps,
  async (props, user) => {
    return await prisma.deck.update({
      where: {
        id: props.data.id,
      },
      data: { ...props.data },
    });
  },
);
// export const createUserDeck = async (newDeck: DeckCreate) => {
//   const deck = await prisma.deck.create({
//     data: { ...newDeck },
//   });
//
//   const parsedDeck = await schemaDeck.safeParseAsync(deck);
//   if (!parsedDeck.success) return [];
//
//   return parsedDeck.data;
// };
