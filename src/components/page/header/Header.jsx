import { useEffect, useState } from 'react';
import Navbar from '../../navbar/Navbar'
import styles from './Header.module.css'

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);

   /* Fijamos el navbar */

   useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `${isScrolled ? styles.fixed : styles.container}`;

  return (
    <header className={navbarClasses}>
        <Navbar />
    </header>
  )
}

export default Header