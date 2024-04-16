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
    UseDisclosureProps
} from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type TModalEventContent = Required<
  Pick<UseDisclosureProps, "onOpen" | "onClose" | "isOpen">
> &
  PropsWithChildren;

export default function ModalEventContent({
  onOpen,
  onClose,
  isOpen,
  children,
}: TModalEventContent) {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>{children}</p>
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
