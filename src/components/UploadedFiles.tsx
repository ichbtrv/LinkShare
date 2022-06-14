import { FileContext } from "@/contexts/FileContext";
import { handleStateEvent } from "@/utils/events";
import React, { useContext, useRef, useState } from "react";
import FileDisplay from "./FileDisplay";
import Modal from "./Modal";
import { supabase } from '../utils/supabase';
import { useRouter } from "next/router";

const UploadedFiles = () => {


  const [isGenerating, setIsGenerating] = useState(false);
  const [uploading, setUploading] = useState(false)
  const [files, setFiles] = useContext(FileContext) ?? [];
  const [fileUrls, setFileUrls] = useState<string[] | null>(null);
  const uploaderRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  async function uploadTo(_event: React.MouseEvent) {
    try {
      setUploading(true)

      for (const file of files!) {
        const urlPrefix = "https://uerodvugvkynnbdioyue.supabase.co/storage/v1/object/public/tracks/";
        const fileExt = file.name.split(".").pop();
        const fileName = `${file.name}.${fileExt}`;
        const filePath = fileName;
        fileUrls ? setFileUrls([...fileUrls, urlPrefix.concat(filePath)]) : setFileUrls([urlPrefix.concat(filePath)]);

        let { error: uploadError } = await supabase.storage
          .from('tracks')
          .upload(filePath, file)

        if (uploadError) {
          throw uploadError
        }
      }
    } catch (error: any) { //Catch clause variable type annotation must be 'any' or 'unknown' if specified
      alert(error.message)
    } finally {
      setUploading(false)
    }

    try {
      let id;
      let created_at;
      let file_urls = fileUrls;
      console.log(file_urls)
      let { body } = await supabase.from('upload_session').insert({ id, created_at, file_urls })
      console.log(body);
      router.push(`/upload_session/${body![0].id}`)
    } catch (error) {
      console.log('error', error)
    }
  }

  const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const file: File | undefined = e.target.files![0];
    if (setFiles) files ? setFiles([...files, file!]) : setFiles([file!]);
  };

  return (
    <section className="relative ml-4 pl-6 border-coolGrayHover-20  border-l  flex flex-col">
      <div className="rounded-md p-2 w-[25rem]">
        <h1>Uploaded Files</h1>

        {files &&
          files.map((file: File) => (
            <FileDisplay key={file.name} file={file}>
              <h1>{file.name}</h1>{" "}
              <p className="text-sm text-coolGray-70">
                {file.size / 1000000} MB
              </p>
            </FileDisplay>
          ))}
      </div>

      <button
        className="rounded-md w-36 ml-2 hover:bg-gray-800 hover:text-white text-left"
        onClick={() => uploaderRef.current?.click()}
      >
        Add Track +{" "}

      </button>
      <input
        id="file-upload"
        name="file-upload"
        type="file"
        className="sr-only"
        onChange={fileUpload}
        ref={uploaderRef}
      />

      <div
        onClick={(e) => handleStateEvent(e, setIsGenerating(!isGenerating)!)}
      >
        <button disabled={files === null || uploading} onClick={(e) => uploadTo(e)} className="rounded-md w-48 ml-2 hover:bg-gray-800 hover:text-white fixed bottom-4 right-0">
          Generate Link{" "}
        </button>
      </div>

      <Modal
        visible={isGenerating}
        closable
        onCancel={() => setIsGenerating(!isGenerating)}
      >
        {uploading ? "Uploading please wait.." : 'All Done'}
      </Modal>
    </section>
  );
};

export default UploadedFiles;
