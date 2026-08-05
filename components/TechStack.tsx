import { Python, Javascript, Typescript, React, Nodejs, Nextdotjs, Html5, Css3, TailwindCss,Fastapi,Django } from "@thesvg/react";

const skills = [
  { name: "Python", icon: Python },
  { name: "JavaScript", icon: Javascript },
  { name: "TypeScript", icon: Typescript },
  { name: "React", icon: React },
  { name: "Node.js", icon: Nodejs },
  { name: "Next.js", icon: Nextdotjs },
  { name: "HTML5", icon: Html5 },
  { name: "CSS3", icon: Css3 },
  { name: "Tailwind CSS", icon: TailwindCss },
];

export default function TechStack() {
  return (
    <div className="w-full">
      <h3 className="font-sans text-xl p-2 ml-2 font-medium">Tech Stack</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex items-center gap-2 p-3 rounded-sm border border-black/5 bg-white"
          >
            <Icon width={20} height={20} />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
