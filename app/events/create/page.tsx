
import EditPartyForm from "@/src/components/parties/create/EditPartyForm";
import { Container } from "@chakra-ui/react";


export default function PartyCreate () {
    return (
        <Container>
            <h1>Party Create text</h1>
            <EditPartyForm />
        </Container>
    );
}