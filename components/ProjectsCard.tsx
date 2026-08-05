import type { ComponentType } from "react";

export type ProjectTech = {
  name: string;
  icon: ComponentType<{ width?: number; height?: number }>;
};

export type Project = {
  title: string;
  techstack: ProjectTech[];
  github_url: string;
  description: string;
};

export default function ProjectsCard({ title, techstack, github_url, description }: Project) {
  return (
    <div className="rounded-sm border border-black/5 bg-white p-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-bold">{title}</h2>
        {github_url && (
          <a
            href={github_url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-neutral-500 hover:text-[#1A1A1A]"
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
              className="flex items-center gap-1.5 rounded-full border border-black/10 px-2.5 py-0.5 text-xs text-neutral-500"
            >
              <Icon width={12} height={12} />
              {name}
            </span>
          ))}
        </div>
      )}

      {description && <p className="mt-3 text-sm text-neutral-600">{description}</p>}
    </div>
  );
}
