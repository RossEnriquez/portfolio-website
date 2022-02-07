import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const PDFfile = () => {
  return (
    <>
      <Document file="/resume.pdf">
        <Page
          pageNumber={1}
          style={{ opacity: "10%" }}
          renderAnnotationLayer={true}
        />
      </Document>
    </>
  );
};
export default PDFfile;
