import type { ComponentType } from "react";
import {
  Javascript,
  Typescript,
  React,
  Nextdotjs,
  Html5,
  Css3,
  TailwindCss,
  Motion,
  Nodejs,
  Fastapi,
  Django,
  Nestjs,
  Express,
  Postgresql,
  Mongodb,
  Redis,
  Postman,
  VisualStudioCode,
  Github,
} from "@thesvg/react";

type TechIcon = {
  name: string;
  icon: ComponentType<{ width?: number; height?: number }>;
};

type TechStackGroup = {
  category: string;
  icons: TechIcon[];
};

const techStack: TechStackGroup[] = [
  {
    category: "Frontend",
    icons: [
      { name: "HTML5", icon: Html5 },
      { name: "CSS3", icon: Css3 },
      { name: "JavaScript", icon: Javascript },
      { name: "TypeScript", icon: Typescript },
      { name: "Tailwind CSS", icon: TailwindCss },
      { name: "React", icon: React },
      { name: "Next.js", icon: Nextdotjs },
      { name: "Motion", icon: Motion },
    ],
  },
  {
    category: "Backend",
    icons: [
      { name: "Django", icon: Django },
      { name: "FastAPI", icon: Fastapi },
      { name: "Node.js", icon: Nodejs },
      { name: "NestJS", icon: Nestjs },
      { name: "Express", icon: Express },
    ],
  },
  {
    category: "Databases",
    icons: [
      { name: "PostgreSQL", icon: Postgresql },
      { name: "MongoDB", icon: Mongodb },
      { name: "Redis", icon: Redis },
    ],
  },
  {
    category: "Tools",
    icons: [
      { name: "Postman", icon: Postman },
      { name: "VS Code", icon: VisualStudioCode },
      { name: "GitHub", icon: Github },
    ],
  },
];

export default function TechStack() {
  return (
    <div className="mt-4 w-full">
      {techStack.map(({ category, icons }) => (
        <div key={category} className="mb-4 last:mb-0">
          <p className="text-sm">{category}</p>
          <div className="mt-2 grid grid-cols-8">
            {icons.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className={name === "GitHub" ? "[&_svg_path]:fill-current" : undefined}
              >
                <Icon width={20} height={20} />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
