import photo from './img/photo.png'
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className="main">
            <section className={`${styles.home} ${styles.section}`} id="home">
                <div className={`${styles.homeContainer} container grid`}>
                    <div className={styles.homeContent}>
                        <div className={styles.homeData}>
                            <div className={styles.homeSubtitle}>
                                <h3>Hello, <span>I`m</span></h3>
                                <h1 className={styles.homeTitle}>Jensy Figueroa</h1>
                                <h2 className={styles.homeEducation}>Full Stack Developer</h2>
                                <p className={styles.homeDescription}>
                                    I`m a Full Stack developer with a passion for building high-quality, interactive web applications. I have experience developing both frontend and backend using technologies such as React, Redux, Node, Express, Sequelize, Postgres, MySQL, SQL Server, ASP.NET, among others. I excel at creating dynamic and attractive user interfaces, using HTML, CSS and JavaScript. In addition, I am capable in the integration of APIs and external services, as well as in the efficient management of databases. With skills in testing, debugging, and optimization, I am committed to delivering high-quality solutions. I work well in a team and have a strong work ethic to tackle challenges and deliver successful projects.
                                </p>

                                <a href="#contact" className={styles.button}>Let`s talk</a>
                            </div>

                            <div className={styles.homeSocial}>
                                <a href="https://github.com/JensyFigueroa?tab=repositories" target="_blank" className={styles.linkSocial}>
                                    <i className="ri-github-fill"></i>
                                </a>
                                <a href="https://dribbble.com/" target="_blank" className={styles.linkSocial}>
                                    <i className="ri-dribbble-line"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/jensy-figueroa-duran-0a069a8b/" target="_blank" className={styles.linkSocial}>
                                    <i className="ri-linkedin-box-line"></i>
                                </a>
                            </div>

                            <div className={styles.homeImage}>
                                <svg className={styles.homeBlod} viewBox="0 0 550 591" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="maskBlob" mask-type="alpha">
                                        <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"/>
                                    </mask>
                                    <g mask="url(#maskBlob)">
                                        <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"/>

                                        <rect x="37" width="476" height="630" fill="url(#pattern0)" />
                                    </g>

                                    <rect x="37" width="476" height="300" fill="url(#pattern1)" />

                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)" />
                                        </pattern>

                                        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)" />
                                        </pattern>

                                        <image className={styles.homeImg} id="imageBlob" width="640" height="925" href={photo} />
                                    </defs>
                                </svg>

                            </div>






                        </div>
                    </div>
                </div>
            </section>

            {/*#########  ABOUT ########*/}
            <section className="about section" id="about">
                
            </section>

            {/*#########  REPO GITHUB ########*/}
            <section className="reposGit section" id="reposGit">

            </section>

            {/*#########  PROJECTS ########*/}
            <section className="projects section" id="projects">

            </section>

            {/*#########  KILLS ########*/}
            <section className="kills section" id="kills">

            </section>

             {/*#########  CONTACT ########*/}
            <section className="contact section" id="contact">

            </section>
        </div>
    )
}

export default Main