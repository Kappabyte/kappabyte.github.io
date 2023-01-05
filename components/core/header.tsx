import Link from "next/link";
import style from "../../styles/components/core/header.module.css"
import Navigation from "./navigation";

const Header = () => {
    return <header className={style.header}>
        <h1>Avery Keuben</h1>
        <Navigation />
    </header>
}

export default Header;