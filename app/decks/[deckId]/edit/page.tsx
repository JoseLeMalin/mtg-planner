import { Fragment } from "react";
import DeckEditForm from "./DeckForm";
import { getUserDeck } from "../../decks.queries";
import { getRequiredAuthSession } from "@/src/lib/auth";

export default async function DeckEditPage({
  params,
  searchParams,
}: {
  params: {
    deckId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const session = await getRequiredAuthSession();
  const deck = await getUserDeck({
    deckId: params.deckId,
    userId: session?.user.id,
    userPage: 5,
  });
  return (
    <Fragment>
      <DeckEditForm />
    </Fragment>
  );
}
