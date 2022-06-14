import { handleStateEvent } from "@/utils/events";
import React, { useState } from "react";
interface UploadedFileProps {
  file?: File;
}
const FileDisplay: React.FC<UploadedFileProps & JSX.IntrinsicElements["section"]> = ({ children }) => {
  return (
    <section className="w-96 appear">
      <div
        className={`rounded-md w-96 bg-coolGray-10 border border-coolGray-30
       hover:bg-coolGray-20
        px-2 py-1 bg-opacity-50 hover:bg-opacity-60 hover:cursor-pointer my-1 text-teal-30 contrast-125`}
      >
        {children}
      </div>
    </section>
  );
};

export default FileDisplay;
