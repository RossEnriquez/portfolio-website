import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const PDFfile = ({ resume }) => {
  return (
    <>
      <Document file={resume}>
        <Page
          pageNumber={1}
          style={{ opacity: "10%" }}
          width={[650]}
          renderAnnotationLayer={true}
        />
      </Document>
    </>
  );
};
export default PDFfile;
