import { Link } from 'react-router-dom'
import photo from './img/Photo.png'
import rickMorty from '../../../assets/img/rick&morty.png'
import videoGames from '../../../assets/img/videoGames.png'
import workify from '../../../assets/img/workify.png'
import todo from '../../../assets/img/todo-list.png'
import webBebedores from '../../../assets/img/webBebedores.png'
import styles from './Main.module.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Main = () => {
    const form = useRef();

    const [msgSend, setMsgSend] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ifxb97y', 'template_437gwo8', form.current, 'wIiAlyzD36CHSaAQX')
            .then((result) => {
                console.log(result.text);
                setMsgSend('Message sent successfully ✅')
                setTimeout(() => {
                    setMsgSend('')
                }, 3000)
                form.current.reset()
            }, (error) => {
                console.log(error.text);
                setMsgSend('Message was not sent correctly (server error) ❌')
                setTimeout(() => {
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
                                <h3>Hello, <span>I'm</span></h3>
                                <h1 className={styles.homeTitle}>Jensy Figueroa</h1>
                                <h2 className={styles.homeEducation}>Full Stack Developer</h2>
                                <p className={styles.homeDescription}>
                                    With knowledge in web development, with the most used technologies in the market, to be able to offer the best projects with quality results.
                                </p>

                                <a href="#contact" className={styles.button}>Let's talk</a>
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
                            I'm a Full Stack developer with a passion for building high-quality, interactive web applications. I have experience developing both frontend and backend using technologies such as React, Redux, Node, Express, Sequelize, Postgres, MySQL, SQL Server, ASP.NET, among others. I excel at creating dynamic and attractive user interfaces, using HTML, CSS and JavaScript. In addition, I am capable in the integration of APIs and external services, as well as in the efficient management of databases. With skills in testing, debugging, and optimization, I am committed to delivering high-quality solutions. I work well in a team and have a strong work ethic to tackle challenges and deliver successful projects.
                        </p>
                        <a href='#contact' className={styles.button}>Contact Me</a>
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

                        <img src={webBebedores} alt="bebedores" className={styles.projectsImg} />

                        <div className={styles.projectsModal}>
                            <span className={styles.projectsSubtitle}>Web</span>
                            <h2 className={styles.projectsTitle}>Modern website</h2>
                            <Link to='https://official-bebedores-k8uo8tsbi-jensyfigueroa.vercel.app/' className={styles.projectsButton} target="_blank" >View demo <i className="ri-external-link-line"></i></Link>
                        </div>
                    </article>
                    
                    <article className={styles.projectsCard}>

                        <img src={todo} alt="todo" className={styles.projectsImg} />

                        <div className={styles.projectsModal}>
                            <span className={styles.projectsSubtitle}>Web</span>
                            <h2 className={styles.projectsTitle}>Modern website</h2>
                            <Link to='https://todo-reto-frontend-mentor.netlify.app/' className={styles.projectsButton} target="_blank" >View demo <i className="ri-external-link-line"></i></Link>
                        </div>
                    </article>

                    <article className={styles.projectsCard}>

                        <img src={rickMorty} alt="rick & morty" className={styles.projectsImg} />

                        <div className={styles.projectsModal}>
                            <span className={styles.projectsSubtitle}>Web</span>
                            <h2 className={styles.projectsTitle}>Modern website</h2>
                            <Link to='https://rick-and-morty-iota-jade.vercel.app/' className={styles.projectsButton} target="_blank" >View demo <i className="ri-external-link-line"></i></Link>
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

            {/*#########  REPO GITHUB ########*/}
            <section className={`${styles.reposGit} section`} id="reposGit">
                <div className={`${styles.reposContainer} container grid`}>
                    <div className={styles.reposData}>
                        <h3 className="sectionSubtitle">
                            My <span>Repositories</span>
                        </h3>

                        <h2 className="sectionTitle">
                            Github
                        </h2>

                        <p className={styles.reposDescription}>
                            See my recent Projects
                        </p>
                    </div>

                    <div className={styles.reposList}>

                        <Link to='https://github.com/JensyFigueroa/lineupSoftball' target='_blank'  className={styles.repoLink}>
                            <i className="fa-brands fa-git-alt"></i>
                            <span>lineupSoftball</span>
                            <p>Project in which the following technologies were used: React, Redux, Bootstrap, Node, Express, MongoDB</p>
                            <p>Javascript</p>
                        </Link>
                        <Link to='https://github.com/JensyFigueroa/toDo-Reto-Frontendmentor-Vite-Tailwind' target='_blank'  className={styles.repoLink}>
                            <i className="fa-brands fa-git-alt"></i>
                            <span>toDo-Reto-Frontendmentor-Vite-Tailwind</span>
                            <p>Project in which the following technologies were used: React, Redux, Node, Tailwind</p>
                            <p>Javascript</p>
                        </Link>
                        <Link to='https://github.com/JensyFigueroa/rick_and_morty' target='_blank'  className={styles.repoLink}>
                            <i className="fa-brands fa-git-alt"></i>
                            <span> rick_and_morty</span>
                            <p>Project in which the following technologies were used: React, Redux, Node, Express, Sequelize, Postgres</p>
                            <p>Javascript</p>
                        </Link>
                        
                        <Link to='https://github.com/JensyFigueroa/videogames' target='_blank' className={styles.repoLink}>
                            <i className="fa-brands fa-git-alt"></i>
                            <span> videogames</span>
                            <p>Project in which the following technologies were used: React, Redux, Node, Express, Sequelize, Postgres</p>
                            <p>Javascript</p>
                        </Link>
                        <Link to='https://github.com/JensyFigueroa/domesticServices_Frontend' target='_blank' className={styles.repoLink}>
                            <i className="fa-brands fa-git-alt"></i> 
                            <span> workify</span>  
                            <p>Project in which the following technologies were used: React, Redux, Node, Express, Sequelize, Postgres</p>
                            <p>Javascript</p>
                        </Link>

                    </div>
                </div>
            </section >

            {/*#########  KILLS ########*/}
            <section className={`${styles.skills} section`} id="skills" >
                <div className={`${styles.skillsContainer} container`}>
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
                        <a href="#projects" className={styles.button}>See projects</a>
                    </div>
                    <div className={styles.skillsContent}>

                        <ol className={styles.skillsGroup}>
                            <h2 className="sectionSubtitle">
                                <span>Frontend</span> Technologies
                            </h2>
                            <li className={styles.skillsItem}><i style={{ fontSize: '30px', color: '#e45f18' }} className="ri-html5-fill"></i> HTML & CSS</li>
                            <li className={styles.skillsItem}><i style={{ fontSize: '30px', color: '#e4c518' }} className="ri-javascript-fill"></i> Javascript</li>
                            <li className={styles.skillsItem}>{/* <i style={{ fontSize: '30px', color: '#18d0e4' }} className="ri-sketching"></i> */} 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#44a8b3" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1" /></svg>
                            Tailwind</li>
                            <li className={styles.skillsItem}> <i style={{ fontSize: '30px', color: '#a018e4' }} className="ri-bootstrap-fill"></i> Bootstrap</li>
                            <li className={styles.skillsItem}><i style={{ fontSize: '30px', color: '#18d0e4' }} className="ri-reactjs-fill"></i> React</li>
                            <li className={styles.skillsItem}> {/* <i style={{ fontSize: '30px', color: '#a018e4' }} className="fa-solid fa-atom"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="25.19" height="24" viewBox="0 0 256 244"><path fill="#764abc" d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896c-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895c.326 4.887 2.28 9.122 5.212 12.054c-11.076 21.828-28.016 37.791-53.426 51.148c-17.266 9.122-35.183 12.38-53.1 10.1c-14.66-1.955-26.062-8.47-33.23-19.222c-10.424-15.963-11.401-33.23-2.605-50.496c6.19-12.38 15.962-21.502 22.152-26.063c-1.303-4.235-3.258-11.402-4.235-16.614c-47.237 34.207-42.35 80.468-28.016 102.295c10.75 16.29 32.577 26.389 56.684 26.389c6.515 0 13.03-.652 19.546-2.28c41.699-8.145 73.299-32.905 91.216-69.718m57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176c16.288 10.751 28.016 24.76 34.531 41.7c5.538 13.683 5.212 27.04-.652 38.443c-9.121 17.266-24.432 26.714-44.63 26.714c-13.031 0-25.41-3.91-31.926-6.842c-3.583 3.258-10.099 8.47-14.66 11.729c14.009 6.515 28.343 10.099 42.025 10.099c31.274 0 54.404-17.267 63.2-34.533c9.447-18.896 8.795-51.474-15.637-79.165M69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895c-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325c-13.357-22.153-18.895-46.26-16.94-72.323c1.302-19.547 7.818-36.488 19.22-50.497c9.447-12.054 27.69-17.918 40.07-18.243c34.531-.652 49.19 42.351 50.168 59.618c4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451c-14.985 41.7-5.212 81.771 13.031 113.372c-1.628 2.28-2.606 5.864-2.28 9.448" /></svg>
                             Redux</li>
                        </ol>

                        <ol className={styles.skillsGroup} >
                            <h2 className="sectionSubtitle">
                                <span>Backend</span> Technologies
                            </h2>
                            <li className={styles.skillsItem}><i style={{ fontSize: '30px' }} className="ri-github-fill"></i> Git & Github</li>
                            <li className={styles.skillsItem}><i style={{ fontSize: '30px', color: '#02c94e' }} className="fa-brands fa-node-js"></i> Node.js</li>
                            <li className={styles.skillsItem}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771l-.5-.667l-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92l-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83l3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27c1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957a6.272 6.272 0 0 1-7.306-.933a6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278c-2.882-.04-4.944 2.094-5.071 5.264z" /></svg>
                                 Express</li>
                            <li className={styles.skillsItem}><i style={{ fontSize: '30px', color: '#0269c9' }} className="fa-solid fa-cube"></i> Sequelize</li>
                            <li className={styles.skillsItem}><i style={{ fontSize: '30px', color: '#95a9ba' }} className="fa-solid fa-database"></i> Postgress - MySQL - MongoDB</li>
                            <li className={styles.skillsItem}>{/* <i style={{ fontSize: '30px', color: '#fc7813' }} className="fa-solid fa-person-skating"></i>  */}

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FF6C37" d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428c6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099m2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453l-.307-.307l-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753m-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032a.06.06 0 0 1 .01-.073l.645-.645zm-2.803-.459l1.172-1.172l.879.878l-1.979.426a.074.074 0 0 1-.085-.039a.072.072 0 0 1 .013-.093m-3.646 6.058a.076.076 0 0 1-.069-.083a.077.077 0 0 1 .022-.046h.002l.946-.946l1.222 1.222zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934l-.294-.295l3.762-3.758l1.82-.393l.874.874c-1.255 1.102-2.971 2.201-5.1 3.268m5.279-3.428h-.002l-.839-.839l4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091m3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343m2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207l1.533-1.533c.661.72.637 1.832-.054 2.522m-.1-1.544a.143.143 0 0 0-.053.157a.416.416 0 0 1-.053.45a.14.14 0 0 0 .023.197a.141.141 0 0 0 .084.03a.14.14 0 0 0 .106-.05a.691.691 0 0 0 .087-.751a.138.138 0 0 0-.194-.033" /></svg>
                            Postman</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/*#########  CONTACT ########*/}
            <section className="contact section" id="contact" >
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

                            <textarea className={styles.contactInput} name="message" placeholder='Enter your message' id="" cols="50" rows="10" required></textarea>

                            <p className="contactMessage" id="contactMessage">{msgSend}

                            </p>

                            <button type='submit' className={`${styles.button} contactButton`}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div >
    )
}

export default Main