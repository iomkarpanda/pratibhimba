import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

export default function Navbar(){
    return(
        <nav className="flex h-15 w-full items-center justify-start gap-5 rounded-sm border border-black/5 shadow-sm bg-white p-6 text-sm dark:border-white/10 dark:bg-neutral-900">
            <Link href="#"> Home </Link>
            <Link href="#"> About </Link>
            <Link href="#"> Blogs </Link>
            <Link href="/contact"> Contact </Link>
            <ThemeToggle/>
        </nav>
    )
}