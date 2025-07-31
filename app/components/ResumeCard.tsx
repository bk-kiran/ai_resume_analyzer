import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import ScoreCircle from './ScoreCircle'
import { usePuterStore } from '~/lib/puter';

const ResumeCard = ({resume: {id, companyName, jobTitle, feedback, imagePath // object destructuring (dont't have to repeat resume.)
}} : {resume: Resume}) => { // resume is coming from prompt and the type of resume is equal to Resume from types (index.d.ts)

    const {fs} = usePuterStore(); /* allow us to use any puter function  */
    const [resumeURL, setResumeURL] = useState('');

    useEffect(() => {
        const loadResume = async () => {
            const blob = await fs.read(imagePath);
            if(!blob) return;
            let url = URL.createObjectURL(blob);
            setResumeURL(url);
        }
        loadResume();
    }, [imagePath]);

  return (
        <Link to={`/feedback/${id}`} className="block bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 animate-in fade-in">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    {companyName && <h2 className="!text-black font-bold break-words">{companyName}</h2>}
                    {jobTitle && <h3 className="text-lg break-words text-gray-500">{jobTitle}</h3>}
                    {!companyName && !jobTitle && <h2 className="!text-black font-bold">Resume</h2>}
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>
            {resumeURL && (
                <div className="gradient-border animate-in fade-in duration-1000">
                    <div className="w-full h-full">
                        <img
                            src={resumeURL}
                            alt="resume"
                            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
                        />
                    </div>
                </div>
                )}
        </Link>

  )
}

export default ResumeCard
