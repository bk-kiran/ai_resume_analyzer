import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import ResumeCard from "~/components/ResumeCard";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter'


export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMeister" },
    { name: "description", content: "Tailor your Resume to any job description!" },
  ];
}

export default function Home() {
  const {auth, kv} = usePuterStore(); /* allow us to use any puter function  */
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  {/* If a user tries to access a blocked route they will be redirected to auth but after authenticated will be automatically 
redirected to the page they were orignally blocked from */}

  useEffect(() => { 
    if(!auth.isAuthenticated) navigate('/auth?next=/'); /* If not authenticated navigated user redirected back to auth */
  }, [auth.isAuthenticated])

  useEffect(() => { // fetch resumes to display
    const loadResumes = async () => {
    setLoadingResumes(true);

    const resumes = (await kv.list('resume:*', true)) as KVItem[];

    const parsedResumes = resumes ?. map((resume) => (
      JSON.parse(resume.value) as Resume
    ))

    console.log("parsedResumes", parsedResumes)

    setResumes(parsedResumes || []);
    setLoadingResumes(false);
  }

  loadResumes()
}, [])




  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

    <section className="flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">ResuMeister</h1>
        {!loadingResumes && resumes.length === 0 ? (
          <h2 className="text-xl mt-2 text-gray-700">No Resumes Found. Upload your first Resume!</h2>
        ): (
          <h2 className="text-xl mt-2 text-gray-700">Tailor your Resume to any job description!</h2>
        )}
      </div>
      {loadingResumes && (
        <div className="flex flex-col items-center justify-center">
          <img src='/images/resume-scan-2.gif' className="w-[200px]"/>
        </div>
      )}

      {!loadingResumes && resumes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}

      {!loadingResumes && resumes.length === 0 && (
        <div className="flex flex-col items-center justify-center mt-10 gap-4">
          <Link to='/upload' className='primary-button w-fit text-xl font-semibold'>
            Upload Resume
          </Link>
        </div>
      )}

    </section>
</main>

}
