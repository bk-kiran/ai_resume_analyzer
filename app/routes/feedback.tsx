import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router';
import { FaBackward } from "react-icons/fa6";
import { usePuterStore } from '~/lib/puter';
import Summary from '~/components/Summary';
import Score from '~/components/Score';
import Details from '~/components/Details';

export const meta = () => ([
    {title: 'AI Resume Analyzer | Auth'},
    {name: 'description', content: "Login to Account"}
])

const feedback = () => {
    const {id} = useParams(); // Extracting the id from the URL parameters
    const {auth, isLoading, fs, kv} = usePuterStore(); // Using puter store to access auth, file system, and key-value storage
    const [imageURL, setImageURL] = useState('');
    const [resumeURL, setResumeURL] = useState('');
    const [feedback, setFeedback] = useState<Feedback | null>(null);
    const navigate = useNavigate();

    useEffect(() => { 
        if(!isLoading && !auth.isAuthenticated) navigate(`/auth?next=/resume/${id}`); /* If not authenticated navigated user redirected back to auth */
      }, [auth.isAuthenticated])

    useEffect(() => {
        const fetchResume = async () => { // Fetch the resume data based on the id
            const response = await kv.get(`resume: ${id}`);
            if (!response) {
                return;
            }
            const resumeData = await JSON.parse(response); // Process the resume data as needed if it exists
            const resumeBlob = await fs.read(resumeData.resumePath); // Read the resume file from the file system
            if (!resumeBlob) {
                return;
            }

            const pdfBlob = new Blob([resumeBlob], { type: 'application/pdf' }); // Create a Blob from the resume file
            const resumeURL = URL.createObjectURL(pdfBlob); // Create a URL for the Blob
            setResumeURL(resumeURL); // Set the resume URL state

            const imageBlob = await fs.read(resumeData.imagePath); // Read the resume image file from the file system
            if (!imageBlob) {
                return;
            }
            const imageURL = URL.createObjectURL(imageBlob); // Create a URL for the Blob
            setImageURL(imageURL); // Set the image URL state

            setFeedback(resumeData.feedback); // Set the feedback state
            console.log({resumeURL, imageURL, feedback: resumeData.feedback})
        };
        fetchResume(); // Call the fetchResume function to load the resume data
    }, [id]);

  return (
    <main className='!pt-0'>
        <nav className='resume-nav'>
            <Link to='/' className='back-button'>
                <FaBackward className='w-2.5 h-2.5'/>
                <span className='text-gray-800 text-sm font-semibold'>Back to Home</span>
            </Link>
        </nav>

        <div className='flex flex-row w-full max-lg:flex-col-reverse'>
            <section className='feedback-section bg-[url("/images/bg-small.svg")] bg-cover bg-center h-[100] sticky top-0 items-center justify-center'>
                {imageURL && resumeURL && ( // Placeholder for resume image and file URL
                    <div className='animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-2xl: h-fit w-fit'>
                        <a href={resumeURL} target='_blank' rel='noopener noreferrer'> { /* Click on image to open the resume PDF file */ }
                            <img src={imageURL} className='w-full h-full object-contain rounded-2xl' title='Resume'/>
                        </a>
                    </div>
                )}
            </section>
            
            <section className='feedback-section'>
                <h2 className='text-4xl text-black font-bold'>Resume Review</h2>

                {feedback ? ( // If feedback exists, display it
                    <div className='flex flex-col gap-8 animate-in fade-in duration-1000'>
                        <Summary feedback={feedback}/>
                        <Score score={feedback.ATS.score || 0} suggestions={feedback.ATS.tips || []}/>
                        <Details feedback={feedback}/>
                    </div>
                ): ( // If no feedback, display a message
                    <img src='/images/resume-scan-2.gif' className='w-full'/>
                )}
            </section>
        </div>
    </main>
  )
}

export default feedback
