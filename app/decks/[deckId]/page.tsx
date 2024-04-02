import { Icon, IconButton } from "@chakra-ui/react";
import { PenIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

export default async function DeckPage({
  params,
  searchParams,
}: {
  params: {
    deckId: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Fragment>
      <div>the deck</div>
      <Link href={`decks/${params.deckId}/edit`}>
        <PenIcon /> 
      </Link>
    </Fragment>
  );
}
