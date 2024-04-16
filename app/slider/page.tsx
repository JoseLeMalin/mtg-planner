import SliderTest from "@/src/components/home/SliderTest";
import { Container } from "@chakra-ui/react";

export default async function AdminHomePage() {
  return (
    <Container data-testid="admin-home-page" display={"flex"} w={"full"} minW={"full"} flexDir={"column"}>
      <SliderTest />
    </Container>
  );
}
