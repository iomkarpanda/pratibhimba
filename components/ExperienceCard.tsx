type Experience = {
  companyName: string;
  timeline: string;
  role: string;
  details: string[];
};

export default function ExperienceCard({
  companyName,
  timeline,
  role,
  details,
}: Experience) {
  return (
    <div className="mt-4">
      <div className="flex items-center gap-4">
        <h3 className="text-sm font-medium">{companyName}</h3>
      </div>
      <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
        {timeline}
      </div>

      <p className="mt-5 text-sm">{role}</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
        {details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
