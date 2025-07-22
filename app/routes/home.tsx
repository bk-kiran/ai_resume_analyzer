import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume Analyzer" },
    { name: "description", content: "Tailor your Resume!" },
  ];
}

export default function Home() {
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
