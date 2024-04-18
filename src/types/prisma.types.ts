import type {
  Account,
  Deck,
  Prisma,
  PrismaClient,
  Session,
  User,
} from "@prisma/client";
import { DeckCreateInfered, DeckUpdateInfered } from "./decks.types";

type ModelNames = Prisma.ModelName;
export type PrismaModels = {
  [M in ModelNames]: Exclude<
    Awaited<ReturnType<PrismaClient[Uncapitalize<M>]["findUnique"]>>,
    null
  >;
};
export type DbTypes = Account | Deck | Session | User;
// export type DbTypes =PrismaModels;

export type DbObjectsCreate = DeckCreateInfered;
export type DbObjectsUpdate = DeckUpdateInfered;

export type UpdateDbObject = {
  id: string;
  [key: string]: unknown;
};

// export type DbType = {
//   [IndexType.Account]: Account;
//   [IndexType.User]: User;
//   [IndexType.Deck]: Deck;
//   [IndexType.Session]: Session;
//   [IndexType.VerificationToken]: VerificationToken;
// };
//
// export enum IndexType {
//   Account = "acount",
//   User = "user",
//   Deck = "deck",
//   Session = "session",
//   VerificationToken = "VerificationToken",
//   // Type for devops
// }
