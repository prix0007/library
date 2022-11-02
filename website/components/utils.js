import React from "react";
import { Viewer, SpecialZoomLevel, Worker } from "@react-pdf-viewer/core";

const deck = "https://dripdoc.s3.amazonaws.com/v1.pdf";

export function Presentation() {
  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
        <Viewer fileUrl={deck} defaultScale={SpecialZoomLevel.PageFit} />
      </Worker>
    </div>
  );
}
