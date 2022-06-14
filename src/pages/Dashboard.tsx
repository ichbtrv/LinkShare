import AudioPlay from '@/components/player/AudioPlay';
import Upload from '@/components/Upload';
import UploadedFiles from '@/components/UploadedFiles';
import { FileContext } from '@/contexts/FileContext';
import React, { useContext } from 'react'

const Dashboard = () => {
  const [files] = useContext(FileContext) ?? [];

  return (

    <div
      className={`${files
        ? "grid grid-cols-2 h-full"
        : "flex flex-col items-center min-w-[95vw] justify-center  h-[100vh]"
        }`}
    >
      {!files ? <Upload /> : <AudioPlay />}
      {files && <UploadedFiles />}
    </div>


  )
}

export default Dashboard