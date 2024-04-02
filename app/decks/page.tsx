import { ButtonAuthSignIn } from "@/src/components/ButtonSignIn";
import HomeComponent from "@/src/components/home/Home";
import { Layout } from "@/src/layout/Layout";
import { getAuthSession } from "@/src/lib/auth";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { Fragment } from "react";

export default async function DeckList() {
  const session = await getAuthSession();
  return (
    <Fragment>
      {!session?.user.name ? (
        <div className="flex">
          <h1>Please connect first</h1>
          <ButtonAuthSignIn />
        </div>
      ) : (
        <div className="flex">
          {/* <Layout className={"flex size-full flex-col space-x-5 md:flex"}> */}
            <Link href={"/decks/create"}>
          <Button>
            Create new deck
          </Button>
            </Link>

          {/* </Layout> */}
        </div>
      )}
    </Fragment>
  );
}
