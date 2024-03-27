// import { authenticate, syncDatabase } from "@/sequelize/sequelize.provider";
import HomeComponent from "@/src/components/home/Home";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
  Stack,
} from "@chakra-ui/react";

export default async function Home() {
  // await syncDatabase();
  // await authenticate();
  return <HomeComponent></HomeComponent>;
}
