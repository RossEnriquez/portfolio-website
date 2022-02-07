import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import WebViewer from "@pdftron/webviewer";
import dynamic from "next/dynamic";
import resume from "/pdfs/Ross_Enriquez_Resume.pdf";

const ResumeModal = ({ isOpen, onClose }) => {
  const viewer = useRef(null);
  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer/lib",
        initialDoc: "/pdfs/Ross_Enriquez_Resume.pdf",
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer } = instance.Core;
      // you can now call WebViewer APIs here...
    });
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My Resume</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div
              className="webviewer"
              ref={viewer}
              style={{ height: "100vh" }}
            ></div>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ResumeModal;
