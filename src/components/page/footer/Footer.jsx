import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.Footter}>
            <div className={`${styles.footterContainer} container grid`}>
                <h1 className={styles.footterTitle}>Jensy <span>Figueroa</span></h1>
                <h2 className={styles.footterEducation}>
                    Full Stack Develop
                </h2>
            </div>

            <div className={styles.footterSocial}>
                <Link to={'https://www.facebook.com/'} target='_blank' className={styles.foortterSocialLink}>
                    <i style={{fontSize:'30px', color:'#133efc'}} className="fa-brands fa-facebook"></i>
                </Link>
                <Link to={'https://www.instagram.com'} target='_blank' className={styles.foortterSocialLink}>
                    <i style={{fontSize:'30px', color:'#fc137c'}} className="fa-brands fa-instagram"></i>
                </Link>
                <Link to={'https://twitter.com/?lang=es'} target='_blank' className={styles.foortterSocialLink}>
                    <i style={{fontSize:'30px', color:'#13cdfc'}} className="fa-brands fa-twitter"></i>
                </Link>

            </div>

            <span className={styles.footterCopy}>
                &#169; Copyright JF. All rigths reserved
            </span>
        </div>
    )
}

export default Footer