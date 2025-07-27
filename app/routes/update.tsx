import React, { useState, type FormEvent } from 'react'
import Navbar from '~/components/Navbar'
import FileUploader from '~/components/FileUploader'
import { usePuterStore } from '~/lib/puter'
import { useNavigate } from 'react-router'

const update = () => {
    const {auth, isLoading, fs, ai, kv} = usePuterStore(); {/* puter.js functions: auth, loading, file storage, AI, key/value storage */}
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false); {/* useState to check if upload is processing*/}
    const [statusText, setStatusText] = useState('')
    const [file, setFileState] = useState<File | null>(null); {/* Uploaded file is passed from file uploader to update.tsx and saved in this state*/}

    {/* Function to help with file uploads */}
    const handleFileSelect = (file: File | null) => {
        setFileState(file)
    } 

    {/* Function to prepare Resume for Analyzing Process */}
    const handleAnalyze = async({companyName, jobTitle, jobDescription, file}: {companyName: string, jobTitle: string, jobDescription: string, file: File}) => {
        setIsProcessing(true); {/* Start processing */}
        setStatusText('Uploading Your Resume...')

        const uploadedFile = await fs.upload([file]); // uplaoding resume file to Puter Cloud Storage
        if (!uploadedFile) return setStatusText('Error: Failed to Upload Your Resume :/')
        
        setStatusText("Upload Sucess: Converting Resume from PDF to Image...")
        //const imageFile  = await convertPDFToImage(file);




    }



    {/* Once Form is SUbmitted */}
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent reloading of browser
        const form = e.currentTarget.closest('form'); // gathering form data
        if(!form) return; 
        const formData = new FormData(form) // storing data in formData

        const companyName = formData.get('company-name') as string
        const jobTitle = formData.get('job-title') as string
        const jobDescription = formData.get('job-description') as string

        // {   console.log({
        //     companyName,jobTitle, jobDescription, file
        // })}

        // if no file when button is submitted then return nothing
        if(!file) return;

        // else call handleAnalyze to start resume analysis
        handleAnalyze({companyName, jobTitle, jobDescription, file})
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
