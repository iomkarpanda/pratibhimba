import type { ComponentType } from "react";

export type ProjectTech = {
  name: string;
  icon: ComponentType<{ width?: number; height?: number }>;
};

export type Project = {
  title: string;
  techstack: ProjectTech[];
  github_url: string;
  description: string[];
};

export default function ProjectsCard({ title, techstack, github_url, description }: Project) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-bold text-sm">{title}</h3>
        {github_url && (
          <a
            href={github_url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-500 hover:text-[#1A1A1A] dark:text-neutral-400 dark:hover:text-[#FAFAF9]"
          >
            GitHub
          </a>
        )}
      </div>

      {techstack.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {techstack.map(({ name, icon: Icon }) => (
            <span
              key={name}
              className="flex items-center gap-1.5 rounded-full border border-black/10 px-2.5 py-0.5 text-xs text-neutral-500 dark:border-white/15 dark:text-neutral-400"
            >
              <Icon width={12} height={12} />
            </span>
          ))}
        </div>
      )}

      {description.length > 0 && (
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
