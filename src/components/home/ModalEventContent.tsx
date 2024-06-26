// "use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  UseDisclosureProps,
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type TModalEventContent = Required<
  Pick<UseDisclosureProps, "onOpen" | "onClose" | "isOpen">
> & {
  event: { id: number; title: string; start: Date; end: Date };
} & PropsWithChildren;

export default function ModalEventContent({
  event,
  isOpen,
  // onOpen,
  // onClose,
  children,
}: TModalEventContent) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenProps, onOpen, onClose } = useDisclosure({ isOpen });

  return (
    <Modal isOpen={isOpenProps} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>
            <p>{event.id}</p>
            <p>{event.title}</p>
            <p>Start: {event.start.toString()}</p>
            <p>End: {event.end.toString()}</p>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
