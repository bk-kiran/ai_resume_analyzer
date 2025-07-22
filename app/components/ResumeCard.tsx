import React from 'react'
import { Link } from 'react-router'
import ScoreCircle from './ScoreCircle'

const ResumeCard = ({resume: {id, companyName, jobTitle, feedback, imagePath // object destructuring (dont't have to repeat resume.)
}} : {resume: Resume}) => { // resume is coming from prompt and the type of resume is equal to Resume from types (index.d.ts)
  return (
    <Link to={`/resume/${id}`} // link to specifc resume card from react router
    className='resume-card animate-in fade-in duration-1000' 
    >
        <div className='resume-card-header'>
            <div className='flex flex-col gap-2' // Resume card styling 
            > 
                <h2 className='!text-black font-bold break-words'>{companyName}</h2>
                <h3 className='text-lg break-words text-gray-5000'>{jobTitle}</h3>
            </div>

            <div className='flex-shrink-0'>
                <ScoreCircle score={feedback.overallScore}/> {/* Links to score cicle component with shows resume feedback out of 100 */}
            </div>
        </div>

        <div className='gradient-border animate-in fade-in duration-1000'> {/* Getting image of resume */}
            <div className='w-full h-full'>
                <img src={imagePath} alt="resume" className='w-full h-[350px] max-sm:h-[200px] object-cover object-top'/>
            </div>
        </div>
    </Link>
  )
}

export default ResumeCard
