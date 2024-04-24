"use client"


import { Box, Button, Card, CardBody, CardHeader, Container, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";


type Inputs = {
    name: string;
    image: string | null;
    start: Date;
    end: Date;
    type: string | null;
    expiresAt: Date | null;
  };

export default function EditPartyForm () {


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm<Inputs>({
        defaultValues: {},
      });


    return (
        <Container>
            <h1>PartyCreate</h1>
            <Card display={"flex"} minW={"75%"} mx={4}>
        <CardHeader>
          
        </CardHeader>
        <CardBody display={"flex"} flexDirection={"column"}>
          <Box display={"flex"}>
            <form onSubmit={() => console.log("submit")}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel htmlFor="name">Deck details</FormLabel>
                <Heading as="h3" size="sm">
                  Deck Name
                </Heading>
                <Input
                  /* defaultValue={name} */
                  id="name"
                  {...register("name", { required: true, maxLength: 20 })}
                  placeholder="Deck name"
                  size="md"
                />
                
                <Heading as="h3" size="sm">
                  Nb Cards
                </Heading>
                <Input size="md"
                    id="start"
                    {...register("start", {
                      required: true,
                    })}
                  >
                </Input>
                <Heading as="h3" size="sm">
                  Image link
                </Heading>
                <Input
                  /* defaultValue={image} */
                  {...register("image", { required: true })}
                  id="image"
                  placeholder="Image link"
                  size="md"
                />
                <div className={"my-3"}>
                  <Button type="submit">Submit</Button>
                </div>
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
            </form>
          </Box>
        </CardBody>
      </Card>
        </Container>
    );
}