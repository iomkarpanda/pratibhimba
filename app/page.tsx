import Image from "next/image";
import Navbar from "../components/NavBar"
import {Github,Linkedin,Nextdotjs,Typescript,TailwindCss,React,Nodejs,Python} from "@thesvg/react"
import ExperienceCard from "@/components/ExperienceCard";
import TechStack from "@/components/TechStack";
import ProjectsCard, { type Project } from "@/components/ProjectsCard";

const projects: Project[] = [
  { title: "TraceFlow", techstack: [{ name: "Next.js", icon: Nextdotjs }, { name: "TypeScript", icon: Typescript }, { name: "Tailwind CSS", icon: TailwindCss }], github_url: "", description: "" },
  { title: "Agency OS", techstack: [{ name: "React", icon: React }, { name: "Node.js", icon: Nodejs }, { name: "Python", icon: Python }], github_url: "", description: "" },
];

export default function Home() {
  return (
    <div className="home relative min-h-screen w-full bg-[#FAFAF9] text-[#1A1A1A]">
        
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(0,0,0,0.06),transparent_75%)]"/>

        <div className="relative mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-10 md:px-0">
            {/* Navbar */}
            <Navbar/>
            
            {/* Profile card */}
            <div className="flex w-full flex-row items-center justify-center gap-4 rounded-sm border border-black/5 bg-white p-6">
                <div className="flex-1 flex flex-col justify-center">
                    <p className="text-2xl md:text-4xl font-sans font-medium">Omkar Panda</p>
                    <p className="text-sm mt-2">Full Stack Developer</p>
                    <div className="w-15 flex justify-start items-center mt-3 gap-2">
                        <a href="https://github.com/iomkarpanda"><Github width={20} height={20}/></a>
                        <a href="https://linkedin.com/in/omkarpanda39"><Linkedin width={20} height={20}/></a>
                    </div>
                </div>
                <Image src="/Profile_image.jpg" alt="Image of Omkar" width="150" height="150" priority className="rounded-full ring-1 ring-black/5 w-24 h-24 md:w-36 md:h-36"/>
            </div>

            {/* Experiences card */}
            <div className="w-full rounded-sm border border-black/5 bg-white">
                <h3 className="font-sans text-xl p-2 ml-2 font-medium">Experience</h3>
                
                <ExperienceCard CompanyName="Nueve IT Solutions" timeline="Feb,2026 - Jul,2026" Role="Software Developer" isworking={true}/>
            </div>

            {/* Tech Stack */}
            <TechStack/>

            {/* Projects */}
            <div className="w-full">
                <h3 className="font-sans text-xl p-2 ml-2 font-medium">Projects</h3>
                <div className="flex flex-col gap-2 p-2">
                    {projects.map((project) => (
                        <ProjectsCard key={project.title} {...project}/>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
}
