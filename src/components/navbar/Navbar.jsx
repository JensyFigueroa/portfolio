import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [clickBurguer, setClickBurguer] = useState(false);

    const [idActive, setIdActive] = useState('')

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
    });

    const showMenu = () => {
        setClickBurguer(!clickBurguer)
    }


    // if (screenSize.width < 1024 && clickBurguer) {
    //     setClickBurguer(true)
    // }

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
            });
        };
        window.addEventListener('resize', handleResize);
    }, []);

    const handleClick = () => {
        setClickBurguer(!clickBurguer)
    }

    const handleScrollToElement = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
        setIdActive(element.id)
    };

    console.log(idActive)

    return (
        <>
            <nav className={`${styles.nav}`}>
                <a href='#home' className={styles.logo}>Jensy <span>Figueroa</span></a>

                <div className={`${styles.navIcon} ${clickBurguer && styles.open}`} onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`${styles.menu}  ${!clickBurguer && styles.hide}`} id="menu">

                    <ul className={styles.navList}>
                        <li>
                            <NavLink to='#' onClick={(e) => { handleScrollToElement(e, "home"), { handleClick } }} className={idActive === 'home' ? styles.active : styles.link} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' onClick={(e) => { handleScrollToElement(e, "about"), { handleClick } }} className={idActive === 'about' ? styles.active : styles.link}>About me</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' onClick={(e) => { handleScrollToElement(e, "reposGit"), { handleClick } }} className={idActive === 'reposGit' ? styles.active : styles.link} >GitHub Repos</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' onClick={(e) => { handleScrollToElement(e, "projects"), { handleClick } }} className={idActive === 'projects' ? styles.active : styles.link} >Projects </NavLink>
                        </li>
                        <li>
                            <NavLink to='#' onClick={(e) => { handleScrollToElement(e, "skills"), { handleClick } }} className={idActive === 'skills' ? styles.active : styles.link}>Skills</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' onClick={(e) => { handleScrollToElement(e, "contact"), { handleClick } }} className={idActive === 'contact' ? styles.active : styles.link}>Contact</NavLink>
                        </li>
                    </ul>

                </div>

            </nav>
        </>
    )
}
