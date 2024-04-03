import { DbTypes } from "../types/prisma.types";

export const useConvertDateToString = <T extends DbTypes>(item: T) => {
  return {
    ...item,
    createdAt: item?.createdAt ? item.createdAt.toISOString() : "",
    updatedAt: item?.updatedAt ? item.updatedAt.toISOString() : "",
  };
};
