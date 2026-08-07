
type Experience = {
    companyName: string,
    timeline: string,
    role: string,
}

export default function ExperienceCard({ companyName, timeline, role }: Experience) {
    return (
        <div className="mt-4">
            <div className="flex gap-4 items-center">
                <h3 className="font-medium text-sm">{companyName}</h3>
            </div>
            <div className="font-mono text-xs text-neutral-500 dark:text-neutral-400">{timeline}</div>

            <p className="mt-5 text-sm">{role}</p>
        </div>
    )
}
