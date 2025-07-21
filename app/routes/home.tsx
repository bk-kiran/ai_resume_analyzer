import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AI Resume Analyzer" },
    { name: "description", content: "Tailor your Resume!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <section className= "main-section">
      <div className="page-heading">
        <h1>AI Resume Analyzer</h1>
        <h2>Tailor your Resume!</h2>
      </div>
    </section>
  </main>
}
