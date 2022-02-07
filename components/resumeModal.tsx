import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useEffect, useRef, useState } from "react";
import PDFfile from "./PDFfile";

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf="center">My Resume</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              {/* <PDFDownloadLink document={<PDFfile />} fileName="FORM">
                {({ loading }) => {
                  loading ? (
                    <Button>Loading document...</Button>
                  ) : (
                    <Button>Download</Button>
                  );
                }}
              </PDFDownloadLink> */}
              <PDFfile />
            </Center>
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
