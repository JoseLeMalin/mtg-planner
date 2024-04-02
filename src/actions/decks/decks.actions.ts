"use server";

import { authAction } from "@/src/lib/actions";
import {
  DeckCreate,
  schemaDeck,
  schemaDeckCreate,
} from "@/src/types/decks.types";
import { prisma } from "src/lib/prisma";
import { v4 } from "uuid";
import { z } from "zod";

const CourseFormSchema = z.object({
  name: z.string().min(3).max(40),
  image: z.string().url(),
  presentation: z.string(),
});

const CourseActionEditProps = z.object({
  courseId: z.string(),
  data: CourseFormSchema,
});

const DeckActionCreateProps = z.object({
  data: schemaDeckCreate,
});

const CourseActionRemoveUserProps = z.object({
  courseId: z.string(),
  userId: z.string(),
});

export const createDeckNextAction = authAction(
  DeckActionCreateProps,
  async (props, { userId }) => {
    return await prisma.deck.create({
      data: { ...props.data, id: v4() },
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
