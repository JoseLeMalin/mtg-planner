import { Button, Center, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className="relative flex place-items-center">
      <Button>
        <Link href="/admin"> Admin Page</Link>
      </Button>
      {/* <Center bg="tomato" h="100px" color="white"> */}
      {/* </Center> */}
    </div>
  );
}
