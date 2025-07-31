import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter'


export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMeister" },
    { name: "description", content: "Tailor your Resume to any job description!" },
  ];
}

export default function Home() {
  const {auth} = usePuterStore(); /* allow us to use any puter function  */
  const navigate = useNavigate();

  {/* If a user tries to access a blocked route they will be redirected to auth but after authenticated will be automatically 
redirected to the page they were orignally blocked from */}

  useEffect(() => { 
    if(!auth.isAuthenticated) navigate('/auth?next=/'); /* If not authenticated navigated user redirected back to auth */
  }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

    <section className="flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">ResuMeister</h1>
        <h2 className="text-xl mt-2 text-gray-700">Tailor your Resume to any job description!</h2>
      </div>

      {resumes.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </section>
</main>

}
