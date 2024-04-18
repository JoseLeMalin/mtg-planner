import { Button, Container, Link } from "@chakra-ui/react";


export default function EventHomePage () {




    return (
        <Container>
            <h1>This is the event EventHomePage</h1>
            <Button >
                <Link href="/events/1">Visit event 1</Link>
            </Button>
        </Container>
    )
}