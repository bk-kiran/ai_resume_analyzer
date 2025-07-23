import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { usePuterStore } from '~/lib/puter'


export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume Analyzer" },
    { name: "description", content: "Tailor your Resume!" },
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

  return <main className="min-h-screen bg-[url('/images/bg-main.svg')] bg-cover bg-center bg-no-repeat bg-fixed">
    <Navbar/>

    <section className= "main-section">
      <div className="page-heading py-16">
        <h1>AI Resume Analyzer</h1>
        <h2>Tailor your Resume!</h2>
      </div>
    

      {resumes.length > 0 && ( // checking if resumes.length > 0 then show the example resume cards
        <div className="resumes-section">
          {resumes.map((resume) => (  // Gathering Resumes from the resumes in the constant folder
            <ResumeCard key={resume.id} resume={resume}/>
          ))}
        </div>
      )}
    
  </section>
    
  </main>
}
