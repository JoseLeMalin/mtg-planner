import { ButtonAuthSignIn } from "@/src/components/ButtonSignIn";
import HomeComponent from "@/src/components/home/Home";
import { getAuthSession } from "@/src/lib/auth";
import { Fragment } from "react";

export default async function HomePage() {
  const session = await getAuthSession();
  return (
    <Fragment>
      <main className="bg-black flex w-full">
        {!session?.user.name ? (
          <div className="flex">
            <h1>Please connect first</h1>
            <ButtonAuthSignIn />
          </div>
        ) : (
          <div className="flex size-full">
            {/* <Layout className={"flex size-full flex-col space-x-5 md:flex"}> */}
            <HomeComponent />

            {/* </Layout> */}
          </div>
        )}
      </main>
    </Fragment>
  );
}
