"use server";

import { authAction } from "@/src/lib/actions";
import { schemaPartyCreate, schemaPartyUpdate } from "@/src/types/event.types";
import { prisma } from "src/lib/prisma";
import { v4 } from "uuid";
import { z } from "zod";

const PartyActionEditProps = z.object({
  data: schemaPartyUpdate,
});

const PartyActionCreateProps = z.object({
  data: schemaPartyCreate,
});

export const createEventNextAction = authAction(
  PartyActionCreateProps,
  async (props, { userId }) => {
    return await prisma.party.create({
      data: { ...props.data, id: v4() },
    });
  },
);

export const updateEventNextAction = authAction(
  PartyActionEditProps,
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
