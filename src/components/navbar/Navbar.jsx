import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [clickBurguer, setClickBurguer] = useState(true);

    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
    });

    if (screenSize.width > 1024 & clickBurguer) {
        setClickBurguer(false)
    }

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
    return (
        <>
            <nav className={`${styles.nav}`}>
                <Link to='#' className={styles.logo}>Jensy <span>Figueroa</span></Link>

                <div className={`${styles.navIcon} ${clickBurguer && styles.open }`} onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
               
                <div className={`${styles.menu}  ${!clickBurguer && styles.hide}`} id="menu">

                    <ul className={styles.navList}>
                        <li>
                            <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : styles.link)} onClick={handleClick}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='#about' className={({ isActive }) => (isActive ? styles.active : styles.link)} onClick={handleClick}>About me</NavLink>
                        </li>
                        <li>
                            <NavLink to='#repos' className={({ isActive }) => (isActive ? styles.active : styles.link)} onClick={handleClick}>GitHub Repos</NavLink>
                        </li>
                        <li>
                            <NavLink to='#projects' className={({ isActive }) => (isActive ? styles.active : styles.link)} onClick={handleClick}>Projects </NavLink>
                        </li>
                        <li>
                            <NavLink to='#kills' className={({ isActive }) => (isActive ? styles.active : styles.link)} onClick={handleClick}>Skills</NavLink>
                        </li>
                        <li>
                            <NavLink to='#contact' className={({ isActive }) => (isActive ? styles.active : styles.link)} onClick={handleClick}>Contact</NavLink>
                        </li>
                    </ul>

                </div>

            </nav>
        </>
    )
}
