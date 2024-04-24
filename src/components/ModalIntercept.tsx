"use client";

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
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

type ModalProps = {
  params: string;
} & PropsWithChildren;

export default function ModalIntercept({ params, children }: ModalProps) {
  const router = useRouter();
  const pathname = usePathname();

  const isCoursePage = pathname?.split("/").filter(Boolean).length === 2;
  const { isOpen, onOpen, onClose } = useDisclosure({ isOpen: isCoursePage });
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
