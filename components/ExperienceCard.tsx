import IsWorking from "./IsWorking"

type Experience = {
    CompanyName:string,
    timeline:string,
    Role:string,
    isworking:boolean,
}

export default function ExperienceCard({CompanyName,timeline,Role,isworking}:Experience){
    return(
        <div className="p-2 m-2 ">
            <div className="flex gap-4 items-center">
                <h2 className="font-medium text-lg">{CompanyName}</h2>
                {isworking?<IsWorking/>:<></>}
            </div>
            <div className="font-mono text-xs text-neutral-500">{timeline}</div>

            <p className="mt-5 text-sm">{Role}</p>
        </div>
    )
}

