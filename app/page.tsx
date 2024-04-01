import HomeComponent from "@/src/components/home/Home";
import { Layout } from "@/src/layout/Layout";
import { getAuthSession } from "@/src/lib/auth";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <div className="flex">
      {/* <Layout className={"flex size-full flex-col space-x-5 md:flex"}> */}
      <HomeComponent />

      {/* </Layout> */}
    </div>
  );
}
