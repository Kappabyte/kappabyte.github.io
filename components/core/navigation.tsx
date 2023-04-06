import Link from "next/link";

const Navigation = () => {
    return <nav>
        <Link href="/">Home</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href="/posts">Posts</Link>
    </nav>
}

export default Navigation;