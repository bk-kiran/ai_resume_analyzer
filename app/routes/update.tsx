import React, { useState, type FormEvent } from 'react'
import Navbar from '~/components/Navbar'
import FileUploader from '~/components/FileUploader'

const update = () => {
const [isProcessing, setIsProcessing] = useState(false); {/* useState to check if upload is processing*/}
const [statusText, setStatusText] = useState('')
const [setFile, setFileState] = useState<File | null>(null); {/* Uploaded file is passed from file uploader to update.tsx and saved in this state*/}

{/* Function to help with file uploads */}
const handleFileSelect = (file: File | null) => {
    setFileState(file)
} 


{/* */}
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent reloading of browser
    const form = e.currentTarget.closest('form'); // gathering form data
    if(!form) return; 
    const formData = new FormData(form) // storing data in formData

    const companyName = formData.get('company-name')
    const jobTitle = formData.get('job-title')
    const jobDescription = formData.get('job-description')

{/*    console.log({
        companyName,jobTitle, jobDescription, setFile
    })*/}
}

  return (
        <main className="min-h-screen bg-[url('/images/bg-main.svg')] bg-cover bg-center bg-no-repeat bg-fixed">
            <Navbar/>

            <section className= "main-section">
                <div className='page-heading'>
                    <h1>AI Powered Feedback</h1>
                    {isProcessing ? ( // if processing
                        <>
                            <h2>{statusText}</h2>
                            <img src="/images/resume-scan.gif" className='w-full'/>
                        </>
                    
                    ) : ( // else
                        <h2>Upload your resume for ATS</h2>

                    )}

                    {/* If not processing, add a form so user can upload resume */}

                    {!isProcessing && (
                        <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                            <div className='form-div'>
                                <label htmlFor='company-name'>Company Name</label>
                                <input type='text' name="company-name" placeholder='eg: Amazon' id='company-name'/>
                            </div>

                            <div className='form-div'>
                                <label htmlFor='job-title'>Job Title</label>
                                <input type='text' name="job-title" placeholder='eg: Software Engineer Intern' id='job-title'/>
                            </div>

                            <div className='form-div'>
                                <label htmlFor='job-description'>Job Description</label>
                                <textarea rows={5} name='job-description' placeholder='Job Description' id='job-description'/>
                            </div>

                            <div className='form-div'>
                                <label htmlFor='uploader'>Upload Resume</label>
                                <FileUploader onFileSelect={handleFileSelect}/>
                            </div>

                            <button className='primary-button' type='submit' >
                                Analyze Resume
                            </button>

                        </form>
                    )}
                </div>
            </section>
        </main>
  )
}

export default update
