import { Fragment, Suspense } from "react";
import DeckEditForm from "./DeckForm";
import { getUserDeck } from "../../decks.queries";
import { getRequiredAuthSession } from "@/src/lib/auth";
import { Spinner } from "@chakra-ui/react";

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

  if (!deck) {
    return <p>Error: deck not found</p>;
  }
  return (
    <Fragment>
      <Suspense fallback={<Spinner />}>
        <DeckEditForm defaultValue={{ deck: { ...deck } }} />
      </Suspense>
    </Fragment>
  );
}
