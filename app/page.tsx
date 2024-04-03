import { ButtonAuthSignIn } from "@/src/components/ButtonSignIn";
import HomeComponent from "@/src/components/home/Home";
import { Layout } from "@/src/layout/Layout";
import { getAuthSession } from "@/src/lib/auth";
import { Button } from "@chakra-ui/react";
import { Fragment } from "react";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <Fragment>
      <main className="flexx w-full bg-black">

      {!session?.user.name ? (
        <div className="flex">
          <h1>Please connect first</h1>
          <ButtonAuthSignIn />
        </div>
      ) : (
        <div className="flex w-full">
          {/* <Layout className={"flex size-full flex-col space-x-5 md:flex"}> */}
          <HomeComponent />

          {/* </Layout> */}
        </div>
      )}
      </main>
    </Fragment>
  );
}
