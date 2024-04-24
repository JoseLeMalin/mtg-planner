"use client";


import {
    Flex,
    Switch,
    Text
} from "@chakra-ui/react";
import { Party } from "@prisma/client";
import { useState } from "react";
import { DisplayListParties } from "./DisplayListParties";



type TListParties = {
  parties: Party[];
  partiesPast: Party[];
};

export const ListParties = ({ parties, partiesPast }: TListParties) => {
  const [toggleParties, setToggleParties] = useState(false);

  return (
    <>
      <Flex direction={"row"} gap={2} marginTop={6}>
        <Text>Current Events</Text>
        <Text>Past Events</Text>
      </Flex>

      <Switch
        id="switch-parties"
        size="md"
        onChange={() => setToggleParties(!toggleParties)}
      />
        <DisplayListParties parties={ !toggleParties ? parties : partiesPast }  />
    </>
  );
};
/*    

        {/* <Card key={event.id}>
          <CardHeader>{event.name}</CardHeader>
          <CardBody>{event.startDate}</CardBody>
          <CardFooter>
            <Link href={`/events/${event.id}`}>
              <Button key={event.id}>Visit event {event.type}</Button>
            </Link>
          </CardFooter>
        </Card> 
<Button key={event.id}>Visit event {event.type}</Button>
            </Link>
          </CardFooter>
        </Card> 
      </Flex>
      </>
    );
}  <Button key={event.id}>Visit event {event.type}</Button>
            </Link>
          </CardFooter>
        </Card> 
      </Flex>
      </>
    );
} */