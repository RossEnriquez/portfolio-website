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
import PDFfile from "./PDFfile";

const ResumeModal = ({ isOpen, onClose, theme }) => {
  const resume = "/Ross_Enriquez_Resume.pdf";
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader alignSelf="center">My Resume</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <PDFfile resume={resume} />
            </Center>
          </ModalBody>
          <ModalFooter>
            <a
              id="download-link"
              href={resume}
              style={{
                visibility: "hidden",
              }}
              download
            >
              Download
            </a>
            <Button
              mr={3}
              bg={theme[1]}
              color="white"
              onClick={() => {
                document.getElementById("download-link").click();
              }}
            >
              Download
            </Button>
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
