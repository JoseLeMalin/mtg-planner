import { Deck } from "@prisma/client";
import { z } from "zod";

export const schemaDeck = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().optional(),
  nbCards: z.number(),
  commander: z.string().optional(),
  nbVictories: z.number().optional(),
  nbDefeats: z.number().optional(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
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
  updatedAt: z.date().optional(),
  createdBy: z.string(),
  ownerId: z.string(),
});

export const schemaDeckUpdate = z.object({
  id: z.string(),
  name: z.string().optional(),
  image: z.string().optional(),
  nbCards: z.number().optional(),
  commander: z.string().optional(),
  nbVictories: z.number().optional(),
  nbDefeats: z.number().optional(),
  updatedAt: z.date().optional(),
  ownerId: z.string().optional(),
});

export type DeckInfered = z.infer<typeof schemaDeck>;
export type DeckCreateInfered = z.infer<typeof schemaDeckCreate>;
export type DeckUpdateInfered = z.infer<typeof schemaDeckUpdate>;

export type DeckListInfered = z.infer<typeof schemaDeckArray>;

export type DeckCreate = Omit<Deck, "id">;
