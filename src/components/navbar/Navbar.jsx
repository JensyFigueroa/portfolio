import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [clickBurguer, setClickBurguer] = useState(false);

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
    });

    const showMenu = () =>{
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
      };
    
    return (
        <>
            <nav className={`${styles.nav}`}>
                <Link to='#' className={styles.logo}>Jensy <span>Figueroa</span></Link>

                <div className={`${styles.navIcon} ${clickBurguer && styles.open }`} onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
               
                <div className={`${styles.menu}  ${!clickBurguer && styles.hide}`} id="menu">

                    <ul className={styles.navList}>
                        <li>
                            <NavLink to='#' onClick={(e) => {handleScrollToElement(e, "home"),{handleClick}}} className={({ isActive }) => (isActive ? styles.active : styles.link)} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' onClick={(e) => {handleScrollToElement(e, "about"), {handleClick}}} className={({ isActive }) => (isActive ? styles.active : styles.link)}>About me</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' onClick={(e) => {handleScrollToElement(e, "reposGit"), {handleClick}}} className={({ isActive }) => (isActive ? styles.active : styles.link)} >GitHub Repos</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' onClick={(e) => {handleScrollToElement(e, "projects"), {handleClick}}} className={({ isActive }) => (isActive ? styles.active : styles.link)} >Projects </NavLink>
                        </li>
                        <li>
                            <NavLink to='#' onClick={(e) => {handleScrollToElement(e, "skills"), {handleClick}}} className={({ isActive }) => (isActive ? styles.active : styles.link)}>Skills</NavLink>
                        </li>
                        <li>
                            <NavLink to='#' onClick={(e) => {handleScrollToElement(e, "contact"), {handleClick}}} className={({ isActive }) => (isActive ? styles.active : styles.link)}>Contact</NavLink>
                        </li>
                    </ul>

                </div>

            </nav>
        </>
    )
}
