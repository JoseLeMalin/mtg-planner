"use server";

import { authAction } from "@/src/lib/actions";
import { schemaEventCreate, schemaEventUpdate } from "@/src/types/event.types";
import { z } from "zod";

const EventActionEditProps = z.object({
  data: schemaEventUpdate,
});

const EventActionCreateProps = z.object({
  data: schemaEventCreate,
});

export const createEventNextAction = authAction(
  EventActionCreateProps,
  async (props, { userId }) => {
    // return await prisma.deck.create({
    //   data: { ...props.data, id: v4() },
    // });
  },
);

export const updateEventNextAction = authAction(
  EventActionEditProps,
  async (props, user) => {
    // return await prisma.deck.update({
    //   where: {
    //     id: props.data.id,
    //   },
    //   data: { ...props.data },
    // });
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
