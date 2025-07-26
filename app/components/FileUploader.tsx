import React, {useCallback, useState} from 'react'
import { useDropzone } from 'react-dropzone' // package to help with file uploading
import { FaCircleInfo } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { formatSize } from '../lib/utils'

interface FileUploaderProps {
    onFileSelect?: (file: File | null) => void;
}


const FileUploader = ({onFileSelect}: FileUploaderProps) => {

    const onDrop = useCallback((acceptedFiles: File[]) => { // accept the file through props
        const file = acceptedFiles[0] || null;
        onFileSelect ?.(file);
    }, [onFileSelect])

    const maxFileSize = 20 * 1024 * 1024; //max size of 20 megabytes taken from utils.ts that calculates file size and determines if it is under max

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop, 
        multiple: false, // only one file (one resume) can be uploaded
        accept: {'application/pdf': ['.pdf']}, // file must be a PDF
        maxSize: maxFileSize // file must be less than 20MB
    })

    const file = acceptedFiles[0] || null;

  return (
    <div className='w-full gradient-border'>
        <div {...getRootProps()}>
            <input {...getInputProps()} />

            <div className='space-y-4 cursor-pointer'>

                {file ? ( // if file uploaded show file name and size
                    <div className='uploader-selected-file' onClick={(e) => e.stopPropagation()}> {/* This allows the user to open a file and upload another one */}
                        <img src="/images/pdf.png" alt='pdf' className='size-10'/>
                        <div className='flex items-center space-x-3'>
                            <div>
                                <p className='text-sm font-medium text-gray-700 truncate max-w-s'>
                                    {file.name}
                                </p>

                                <p className='text-sm text-gray-500 '>
                                    {formatSize(file.size)}
                                </p>       
                            </div>  
                        </div>

                        <button className="p-2 cursor-pointer" onClick={(e) => {
                            onFileSelect ?.(null) // Current file is removed when remove button clicked
                        }}>
                            <FaXmark className='w-4h-4' role="img" aria-label="remove"/>
                        </button>
                    </div>
                ): ( // else (if does not exist)
                    <div>
                        <div className='mx-auto w-16 h-16 flex items-center justify-center' role="img" aria-label="upload">
                            <FaCircleInfo size={50}/>
                        </div>

                        <p className='text-lg text-gray-500'>
                            <span className='font-semibold'>
                                Click to Upload
                            </span> or drag and drop
                        </p>

                        <p className='text-lg text-gray-500'>PDF (max {formatSize(maxFileSize)})</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default FileUploader
