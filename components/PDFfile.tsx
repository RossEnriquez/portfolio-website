import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const PDFfile = ({ resume }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

  return (
    <>
      <Document file={resume}>
        <Page pageNumber={1} renderAnnotationLayer={true} />
      </Document>
    </>
  );
};
export default PDFfile;
