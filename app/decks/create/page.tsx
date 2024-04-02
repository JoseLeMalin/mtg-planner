import { getRequiredAuthSession } from "@/src/lib/auth";
import { Button, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Fragment, useState } from "react";
import DeckEditForm from "../[deckId]/edit/DeckForm";

enum DeckType {
  COMMANDER = "Commander",
  STANDARD = "standard",
  OTHER = "other",
}

export default async function DeckCreate() {
  const session = await getRequiredAuthSession();
  // const [deckType, setDeckType] = useState<DeckType>(DeckType.COMMANDER);
  // const handleDeckTypeChange = async (formatType: DeckType) => {
  //   "use server";
  //   setDeckType(formatType);
  // };
  const handleCreateDeck = async (formData: FormData) => {
    "use server";
    const deck = { id: "dflngk" };
    const deckName = formData.get("");
    revalidatePath(`/decks/${deck.id}`);
    redirect(`/decks/${deck.id}`);
  };

  return (
    <Fragment>
      <DeckEditForm />
    </Fragment>
  );
}
