import { Link } from 'react-router-dom'
import photo from './img/Photo.png'
import rickMorty from '../../../assets/img/rick&morty.png'
import videoGames from '../../../assets/img/videoGames.png'
import workify from '../../../assets/img/workify.png'
import styles from './Main.module.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import express from '../../../assets/img/express.svg'

const Main = () => {
    const form = useRef();

    const [msgSend, setMsgSend] = useState('')

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ifxb97y', 'template_437gwo8', form.current, 'wIiAlyzD36CHSaAQX')
        .then((result) => {
            console.log(result.text);
            setMsgSend('Message sent successfully ✅')
            setTimeout(()=>{
                setMsgSend('')
            }, 3000)
            form.current.reset()
        }, (error) => {
            console.log(error.text);
            setMsgSend('Message was not sent correctly (server error) ❌')
            setTimeout(()=>{
                setMsgSend('')
            }, 3000)
        });
    };

    return (//################### HOME ###############################
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
                                <Link to="https://github.com/JensyFigueroa?tab=repositories" target="_blank" className={styles.linkSocial}>
                                    <i className="ri-github-fill"></i>
                                </Link>
                                <Link to="https://dribbble.com/" target="_blank" className={styles.linkSocial}>
                                    <i className="ri-dribbble-line"></i>
                                </Link>
                                <Link to="https://www.linkedin.com/in/jensy-figueroa-duran-0a069a8b/" target="_blank" className={styles.linkSocial}>
                                    <i className="ri-linkedin-box-line"></i>
                                </Link>
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
            <section className={`${styles.about} section`} id="about">
                <div className={`${styles.aboutContainer} container grid`}>
                    <div className={styles.aboutData}>
                        <h3 className="sectionSubtitle">
                            My <span>Intro</span>
                        </h3>
                        <h2 className="sectionTitle">
                            About me
                        </h2>

                        <p className={styles.aboutDescription}>
                            I`m a Full Stack developer with a passion for building high-quality, interactive web applications. I have experience developing both frontend and backend using technologies such as React, Redux, Node, Express, Sequelize, Postgres, MySQL, SQL Server, ASP.NET, among others. I excel at creating dynamic and attractive user interfaces, using HTML, CSS and JavaScript. In addition, I am capable in the integration of APIs and external services, as well as in the efficient management of databases. With skills in testing, debugging, and optimization, I am committed to delivering high-quality solutions. I work well in a team and have a strong work ethic to tackle challenges and deliver successful projects.
                        </p>
                        <Link to='#contact' className={styles.button}>Contact Me</Link>
                        <div className={styles.aboutImage}>
                            <svg className={styles.aboutBlod} viewBox="0 0 550 592" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="maskBorder" mask-type="alpha">
                                    <path d="M263 48.1782C270.426 43.891 279.574 43.891 287 48.1782L501.157 
      171.822C508.583 176.109 513.157 184.032 513.157 192.606V439.894C513.157 
      448.468 508.583 456.391 501.157 460.678L287 584.322C279.574 588.609 
      270.426 588.609 263 584.322L48.843 460.678C41.4174 456.391 36.843 448.468 36.843 
      439.894V192.606C36.843 184.032 41.4174 176.109 48.843 171.822L263 48.1782Z" fill="black" />
                                </mask>
                                <g mask="url(#maskBorder)">
                                    <rect x="37" width="476" height="630" fill="url(#pattern2)" />

                                    <path d="M285 51.6423L499.157 175.286C505.345 178.859 509.157 185.461 509.157 
      192.606V439.894C509.157 447.039 505.345 453.641 499.157 457.214L285 
      580.858C278.812 584.43 271.188 584.43 265 580.858L50.843 457.214C44.655 453.641 
      40.843 447.039 40.843 439.894V192.606C40.843 185.461 44.655 178.859 50.843 
      175.286L265 51.6423C271.188 48.0697 278.812 48.0696 285 51.6423Z" stroke="black" strokeWidth="10" />
                                </g>

                                <rect x="37" width="476" height="300" fill="url(#pattern3)" />

                                <defs>
                                    <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use href="#imageBorder" transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)" />
                                    </pattern>

                                    <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use href="#imageBorder" transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)" />
                                    </pattern>

                                    <image className='aboutImg' id="imageBorder" width="640" height="940" href={photo} />
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/*#########  REPO GITHUB ########*/}
            <section className="reposGit section" id="reposGit">

            </section>

            {/*#########  PROJECTS ########*/}
            <section className={`${styles.projects} section`} id="projects">
                <h3 className="sectionSubtitle">
                    My <span>Jobs</span>
                </h3>

                <h2 className="sectionTitle">
                    Recent projects
                </h2>

                <div className={`${styles.projectsContainter} container`}>
                    <article className={styles.projectsCard}>
                        
                        <img src={rickMorty} alt="rick & morty" className={styles.projectsImg} />

                        <div className={styles.projectsModal}>
                            <span className={styles.projectsSubtitle}>Web</span>
                            <h2 className={styles.projectsTitle}>Modern website</h2>
                            <Link to='#' className={styles.projectsButton} target="_blank" >View demo <i className="ri-external-link-line"></i></Link>
                        </div>
                    </article>

                    <article className={styles.projectsCard}>
                        <img src={videoGames} alt="videoGames" className={styles.projectsImg} />

                        <div className={styles.projectsModal}>
                            <span className={styles.projectsSubtitle}>Web</span>
                            <h2 className={styles.projectsTitle}>Modern website</h2>
                            <Link to='https://videogames-five.vercel.app/' target="_blank" className={styles.projectsButton}>View demo <i className="ri-external-link-line"></i></Link>
                        </div>
                    </article>

                    <article className={styles.projectsCard}>
                        <img src={workify} alt="workify" className={styles.projectsImg} />

                        <div className={styles.projectsModal}>
                            <span className={styles.projectsSubtitle}>Web</span>
                            <h2 className={styles.projectsTitle}>Modern website</h2>
                            <Link to='https://workify-alpha.vercel.app/' target="_blank" className={styles.projectsButton}>View demo <i className="ri-external-link-line"></i></Link>
                        </div>
                    </article>
                     

                </div>
            </section>

            {/*#########  KILLS ########*/}
            <section className={`${styles.skills} section`} id="skills">
                <div className={`${styles.skillsContainer} container grid`}>
                    <div className={styles.skillsData}>
                        <h3 className="sectionSubtitle">
                            Favorite <span>Skills</span>
                        </h3>

                        <h2 className="sectionTitle">
                            My kills
                        </h2>

                        <p className={styles.skillsDescription}>
                            See fully my skills to develop the projects for you
                        </p>
                        <Link to="#projects" className={styles.button}>See projects</Link>
                    </div>
                    <div className={styles.skillsContent}>
                        <ol className={styles.skillsGroup}>
                            <li className={styles.skillsItem}><i style={{fontSize:'30px', color:'#e45f18'}} className="ri-html5-fill"></i> HTML & CSS</li>
                            <li className={styles.skillsItem}><i  style={{fontSize:'30px', color:'#e4c518'}} className="ri-javascript-fill"></i> Javascript</li>
                            <li className={styles.skillsItem}><i style={{fontSize:'30px', color:'#18d0e4'}} className="ri-sketching"></i> Tailwind</li>
                            <li className={styles.skillsItem}> <i style={{fontSize:'30px', color:'#a018e4'}} className="ri-bootstrap-fill"></i> Bootstrap</li>
                            <li className={styles.skillsItem}><i style={{fontSize:'30px', color:'#18d0e4'}} className="ri-reactjs-fill"></i> React</li>
                            <li className={styles.skillsItem}> <i style={{fontSize:'30px', color:'#a018e4'}} className="fa-solid fa-atom"></i> Redux</li>
                        </ol>
                        <ol className="skillsGroup" >
                            <li className={styles.skillsItem}><i style={{fontSize:'30px'}} className="ri-github-fill"></i> Git & Github</li>
                            <li className={styles.skillsItem}><i style={{fontSize:'30px', color:'#02c94e'}} className="fa-brands fa-node-js"></i> Node.js</li>
                            <li className={styles.skillsItem}>Express</li>
                            <li className={styles.skillsItem}><i style={{fontSize:'30px', color:'#0269c9'}}  className="fa-solid fa-cube"></i> Sequelize</li>
                            <li className={styles.skillsItem}><i style={{fontSize:'30px', color:'#95a9ba'}} className="fa-solid fa-database"></i> Postgress - MySQL</li>
                            <li className={styles.skillsItem}><i style={{fontSize:'30px', color:'#fc7813'}} className="fa-solid fa-person-skating"></i> Postman</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/*#########  CONTACT ########*/}
            <section className="contact section" id="contact">
                <h3 className="sectionSubtitle">
                    Get in <span>Touch</span>
                </h3>

                <h2 className="sectionTitle">
                    Contact me
                </h2>

                <div className={`${styles.contactContainer} container grid`}>
                    <form ref={form} onSubmit={sendEmail} action="" className={styles.contactForm} id="contactForm">
                        <div className={styles.contactGroup}>
                            <input type="text" name='userName' placeholder='Enter your name' required className={styles.contactInput} />

                            <input type="email" name='userEmail' placeholder='Enter your Email' required className={styles.contactInput} />
                            
                            <textarea className={styles.contactInput}  name="message" placeholder='Enter your message' id="" cols="50" rows="10" required></textarea>

                            <p className="contactMessage" id="contactMessage">{msgSend}
                                
                            </p>

                            <button type='submit' className={`${styles.button} contactButton`}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Main