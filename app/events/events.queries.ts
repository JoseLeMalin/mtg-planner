import dayjs from "dayjs";
import { prisma } from "src/lib/prisma";

export const getUserEvents = async (
  userId?: string,
): Promise<
  {
    id: string;
    name: string;
    image: string | null;
    start: Date;
    end: Date;
    type: string | null;
    expiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date | null;
    ownerId: string;
  }[]
> => {
  const events = await prisma.party.findMany({
    where: {
      ownerId: userId,
      start: {
        gte: dayjs().toDate(),
      },
    },
  });
  return events;
};

export const getUserEventsPast = async (
  userId?: string,
): Promise<
  {
    id: string;
    name: string;
    image: string | null;
    start: Date;
    end: Date;
    type: string | null;
    expiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date | null;
    ownerId: string;
  }[]
> => {
  const events = await prisma.party.findMany({
    where: {
      ownerId: userId,
      start: {
        lt: dayjs().toDate(),
      },
    },
  });
  return events;
};
