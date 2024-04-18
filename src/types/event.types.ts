import { z } from "zod";

export const schemaEvent = z.object({
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

export const schemaEventCreate = z.object({
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

export const schemaEventUpdate = z.object({
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

export type EventInfered = z.infer<typeof schemaEvent>;
export type EventCreateInfered = z.infer<typeof schemaEventCreate>;
export type DeckUpdateInfered = z.infer<typeof schemaEventUpdate>;

// export type DeckListInfered = z.infer<typeof schemaDeckArray>;

export type EventCreate = Omit<Event, "id">;
