import { z } from "zod";

export const schemaParty = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().optional(),
  invitedPeople: z.array(z.string()).optional(),
  start: z.date(),
  end: z.date(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  createdBy: z.string(),
  ownerId: z.string(),
});

export const schemaPartyCreate = z.object({
  name: z.string(),
  image: z.string().optional(),
  invitedPeople: z.array(z.string()).optional(),
  start: z.date(),
  end: z.date(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  createdBy: z.string(),
  ownerId: z.string(),
});

export const schemaPartyUpdate = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string().optional(),
  invitedPeople: z.array(z.string()).optional(),
  start: z.date().optional(),
  end: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  createdBy: z.string().optional(),
  ownerId: z.string().optional(),
});

export type PartyInfered = z.infer<typeof schemaParty>;
export type PartyCreateInfered = z.infer<typeof schemaPartyCreate>;

// export type DeckListInfered = z.infer<typeof schemaDeckArray>;

export type PartyCreate = Omit<Event, "id">;
export type PartyTest = { id: string };
