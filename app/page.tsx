import Image from "next/image";
import Navbar from "../components/NavBar"
import {Github,Linkedin,Nextdotjs,Typescript,TailwindCss,Python,Fastapi,Docker,Django,Langchain,Langgraph,Pinecone,Gemini,Sqlite,Textual} from "@thesvg/react"
import ExperienceCard from "@/components/ExperienceCard";
import TechStack from "@/components/TechStack";
import ProjectsCard, { type Project } from "@/components/ProjectsCard";
import OpenToWork from "@/components/OpenToWork";
import Footer from "@/components/Footer";

const projects: Project[] = [
  {
    title: "TraceFlow",
    techstack: [
      { name: "Next.js", icon: Nextdotjs },
      { name: "TypeScript", icon: Typescript },
      { name: "Tailwind CSS", icon: TailwindCss },
      { name: "FastAPI", icon: Fastapi },
      { name: "Docker", icon: Docker },
    ],
    github_url: "",
    description: [
      "Built a full-stack infrastructure management console replacing five CLI tools (redis-cli, mongosh, kafka-console-consumer, rabbitmqadmin, nats) with a unified web interface.",
      "Developed ~15,500 LOC across 76+ source files using a Python backend and TypeScript frontend.",
      "Designed BaseService plugin architecture and implemented 198 REST/WebSocket endpoints for Redis, MongoDB, Kafka, RabbitMQ, and NATS.",
      "Orchestrated Redis 7, RabbitMQ 4, Kafka 7.9, MongoDB 8, NATS 2.10 using Docker Compose with persistent volumes and health checks.",
    ],
  },
  {
    title: "Video Question Answering using RAG",
    techstack: [
      { name: "Django", icon: Django },
      { name: "LangChain", icon: Langchain },
      { name: "LangGraph", icon: Langgraph },
      { name: "Pinecone", icon: Pinecone },
      { name: "Gemini", icon: Gemini },
      { name: "Python", icon: Python },
    ],
    github_url: "",
    description: [
      "Built a Retrieval-Augmented Generation (RAG) system to answer questions over video transcripts using semantic search.",
      "Developed transcript chunking, embedding, vector search, and retrieval pipelines with Pinecone.",
      "Built Django REST APIs integrating LLMs with grounded retrieval and timestamp-based evidence generation.",
    ],
  },
  {
    title: "Terminal API Client",
    techstack: [
      { name: "Python", icon: Python },
      { name: "Textual", icon: Textual },
      { name: "SQLite", icon: Sqlite },
    ],
    github_url: "",
    description: [
      "Built a full-featured REST API client that runs entirely in the terminal — a keyboard-driven, lightweight alternative to Postman, using Python and the Textual TUI framework.",
      "Organized endpoints into collections with full control over params, headers, authorization (Bearer + HTTP Basic), body, cookies, scripts, and tests.",
      "Developed a six-tab response viewer (Body, Preview, Headers, Cookies, Tests, Timeline) tracking status code, latency, and body size across request history.",
      "Persisted everything locally in SQLite, with a custom dark theme and color-coded HTTP methods for a polished terminal experience.",
    ],
  },
];

export default function Home() {
  return (
    <div className="home relative min-h-screen w-full text-[#1A1A1A] dark:text-[#FAFAF9]">
        
        {/* <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(0,0,0,0.06),transparent_75%)]"/> */}
        
        <div className="relative mx-auto flex w-full max-w-2xl flex-col gap-2 px-4 py-10 md:px-0">
            {/* Navbar */}
            <Navbar/>
            
            {/* Profile card */}
            <div className="flex w-full flex-row items-center justify-center gap-4 rounded-sm border border-black/5 shadow-sm bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
                <div className="flex-1 flex flex-col justify-center">
                    <OpenToWork/>
                    <p className="text-2xl font-medium">Omkar Panda</p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        Full Stack Developer specializing in Django, FastAPI, and Next.js. I build production-ready RAG systems with LangChain and LangGraph, and turn complex infrastructure into simple, unified web interfaces.
                    </p>
                    <div className="w-15 flex justify-start items-center mt-4 gap-2">
                        <a href="https://github.com/iomkarpanda" className="[&_svg_path]:fill-current"><Github width={15} height={15}/></a>
                        <a href="https://linkedin.com/in/omkarpanda39"><Linkedin width={15} height={15}/></a>
                    </div>
                </div>
                <Image src="/Profile_image.jpg" alt="Image of Omkar" width="150" height="150" priority className="rounded-full ring-1 ring-black/5 w-24 h-24 md:w-36 md:h-36 dark:ring-white/10"/>
            </div>

            {/* Experiences card */}
            <div className="w-full rounded-sm border border-black/5 shadow-sm bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
                <h2 className="text-lg font-medium">Experience</h2>
                
                <ExperienceCard
                    companyName="Nueve IT Solutions"
                    timeline="Feb 2026 – Sep 2026"
                    role="SDE Intern"
                    details={[
                        "Developed backend services and REST APIs using Django, Django REST Framework, and FastAPI.",
                        "Built production-ready RAG applications using LangChain and LangGraph with document ingestion, embeddings, vector search, and retrieval pipelines.",
                        "Architected and led the internal examination platform for technical hiring, managing architecture design, feature coordination, code reviews, and quality standards. The platform is actively used for company hiring.",
                        "Integrated LLMs with scalable REST APIs for AI-powered backend systems.",
                    ]}
                />
            </div>

            {/* Tech Stack */}

            <div className="w-full rounded-sm border border-black/5 shadow-sm bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
                <h2 className="text-lg font-medium">Tech Stack</h2>
                <TechStack/>  
            </div>

            {/* Projects */}
            <div id="projects" className="w-full scroll-mt-6 rounded-sm border border-black/5 shadow-sm bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
                <h2 className="text-lg font-medium">Projects</h2>
                <div className="mt-4 divide-y divide-black/5 dark:divide-white/10">
                    {projects.map((project) => (
                        <div key={project.title} className="py-4 first:pt-0 last:pb-0">
                            <ProjectsCard {...project}/>
                        </div>
                    ))}
                </div>
            </div>

        </div>

        {/* Footer  */}
        <Footer/>
    </div>
  );
}
