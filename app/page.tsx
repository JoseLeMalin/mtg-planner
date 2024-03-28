import HomeComponent from "@/src/components/home/Home";
import { getAuthSession } from "@/src/lib/auth";

export default async function Home() {
  const session = await getAuthSession();
  return <HomeComponent />;
}
