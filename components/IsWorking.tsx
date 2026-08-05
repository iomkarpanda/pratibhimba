export default function IsWorking(){
    return(
        <div className="w-24 flex gap-2 items-center justify-center px-2 py-1 bg-green-500/10 border border-green-300 rounded-sm ">
            <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-xs">Working</p>
        </div>
    )
}