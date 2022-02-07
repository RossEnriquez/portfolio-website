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
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import resume from "./resume.pdf";

const ResumeModal = ({ isOpen, onClose }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My Resume</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
              <div style={{ height: "650px" }}>
                <Viewer
                  fileUrl={resume.src}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </div>
            </Worker>
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
