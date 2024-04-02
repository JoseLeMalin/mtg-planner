import { Deck } from "@prisma/client";
import { prisma } from "src/lib/prisma";
import { z } from "zod";

export const schemaDeck = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().optional(),
  nbCards: z.number(),
  commander: z.string().optional(),
  nbVictories: z.number().optional(),
  nbDefeats: z.number().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime().optional(),
  createdBy: z.string(),
  ownerId: z.string(),
});

export const schemaDeckArray = z.array(schemaDeck);

export const schemaDeckCreate = z.object({
  name: z.string(),
  image: z.string().optional(),
  nbCards: z.number(),
  commander: z.string().optional(),
  nbVictories: z.number().optional(),
  nbDefeats: z.number().optional(),
  createdAt: z.date(),
  updatedAt: z.string().datetime().optional(),
  createdBy: z.string(),
  ownerId: z.string(),
});


export type DeckInfered = z.infer<typeof schemaDeck>;
export type DeckCreateInfered = z.infer<typeof schemaDeckCreate>;
export type DeckListInfered = z.infer<typeof schemaDeckArray>;

export type DeckCreate = Omit<Deck, "id">;
