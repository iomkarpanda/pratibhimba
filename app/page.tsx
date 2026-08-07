import Image from "next/image";
import Navbar from "../components/NavBar"
import {Github,Linkedin,Nextdotjs,Typescript,TailwindCss,React,Nodejs,Python} from "@thesvg/react"
import ExperienceCard from "@/components/ExperienceCard";
import TechStack from "@/components/TechStack";
import ProjectsCard, { type Project } from "@/components/ProjectsCard";
import OpenToWork from "@/components/OpenToWork";
import Footer from "@/components/Footer";

const projects: Project[] = [
  { title: "TraceFlow", techstack: [{ name: "Next.js", icon: Nextdotjs }, { name: "TypeScript", icon: Typescript }, { name: "Tailwind CSS", icon: TailwindCss }], github_url: "", description: "" },
  { title: "Agency OS", techstack: [{ name: "React", icon: React }, { name: "Node.js", icon: Nodejs }, { name: "Python", icon: Python }], github_url: "", description: "" },
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
                    <p className="text-sm mt-2">Full Stack Developer</p>
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
                    timeline="Feb 2026 – Jul 2026"
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
            <div className="w-full rounded-sm border border-black/5 shadow-sm bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
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
