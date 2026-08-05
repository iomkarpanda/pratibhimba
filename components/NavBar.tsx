import Link from "next/link"

export default function Navbar(){
    return(
        <nav className="flex h-15 w-full items-center justify-start gap-5 rounded-sm border border-black/5 bg-white p-5">
            <Link href="#"> Home </Link>
            <Link href="#"> About </Link>
            <Link href="#"> Blogs </Link>
        </nav>
    )
}