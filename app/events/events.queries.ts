import { prisma } from "src/lib/prisma";

export const getUserEvents = async (
  userId?: string,
): Promise<
  {
    id: string;
    startDate: Date;
    endDate: Date;
    type: string;
    expiresAt: Date | null;
    createdAt: Date;
    updatedAt: Date | null;
    ownerId: string;
  }[]
> => {
  const events = await prisma.party.findMany({
    where: {
      ownerId: userId,
    },
  });
  return events;
};
