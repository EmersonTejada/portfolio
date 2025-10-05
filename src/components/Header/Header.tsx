import Navbar from "../Navbar/Navbar"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <Navbar />
        </header>
    )
}

export default Header;