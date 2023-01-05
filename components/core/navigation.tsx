import Link from "next/link";
import style from "../../styles/components/core/nav.module.css"

const Navigation = () => {
    return <nav className={style.nav}>
        <Link className={style.link} href="/">Home</Link>
        <Link className={style.link} href="/projects">Projects</Link>
        <Link className={style.link} href="/posts">Posts</Link>
    </nav>
}

export default Navigation;