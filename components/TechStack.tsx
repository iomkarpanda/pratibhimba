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

// Express is the only @thesvg/react icon whose default variant renders a
// native <title> (browser hover tooltip). Render the same glyph (same path,
// viewBox, and fill as the package's default variant) without the <title> so
// every icon in the grid behaves the same on hover. This also avoids passing
// refs from this Server Component.
const EXPRESS_PATH =
  "M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z";

function ExpressIcon({ width = 20, height = 20 }: { width?: number; height?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path d={EXPRESS_PATH} />
    </svg>
  );
}

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
      { name: "Express", icon: ExpressIcon },
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
                className={
                  name === "GitHub"
                    ? "[&_svg_path]:fill-current"
                    : name === "Express"
                      ? "dark:[&_svg]:fill-white dark:[&_svg]:stroke-white dark:[&_svg]:stroke-[0.75]"
                      : undefined
                }
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
