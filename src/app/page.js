"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        // Typewriter effect
        const typewriterElement = document.getElementById("typewriter")
        const phrases = [
            "Full-Stack Developer",
            "Next.js Specialist",
            "Web Application Developer",
            "Scalable Solutions Expert",
            "Efficient Code Engineer",
            "Creative Problem Solver",
            "Passionate Software Engineer",
            "Frontend & Backend Developer",
            "Innovative Thinker",
            "UI/UX Designer",
            "Problem Solver",
            "Creative Thinker",
            "Tech Enthusiast",
        ]

        let phraseIndex = 0
        let charIndex = 0
        let isDeleting = false
        let isEnd = false

        function typeWriter() {
            isEnd = false
            const currentPhrase = phrases[phraseIndex]

            if (isDeleting) {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1)
                charIndex--
            } else {
                typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1)
                charIndex++
            }

            if (!isDeleting && charIndex === currentPhrase.length) {
                isEnd = true
                isDeleting = true
                setTimeout(typeWriter, 2000)
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false
                phraseIndex = (phraseIndex + 1) % phrases.length
                setTimeout(typeWriter, 500)
            } else {
                const speed = isDeleting ? 100 : 150
                setTimeout(typeWriter, isEnd ? speed * 2 : speed)
            }
        }

        // Floating circles background
        function createCircles() {
            const circlesContainer = document.getElementById("circles")
            const colors = [
                "rgba(255, 107, 107, 0.3)",
                "rgba(255, 159, 67, 0.3)",
                "rgba(29, 209, 161, 0.3)",
                "rgba(72, 219, 251, 0.3)",
                "rgba(120, 111, 166, 0.3)",
                "rgba(225, 112, 85, 0.3)",
            ]

            for (let i = 0; i < 30; i++) {
                const circle = document.createElement("div")
                circle.classList.add("circle")

                const size = Math.random() * 15 + 5
                circle.style.width = `${size}px`
                circle.style.height = `${size}px`

                circle.style.left = `${Math.random() * 100}%`
                circle.style.top = `${Math.random() * 100}%`

                circle.style.background = colors[Math.floor(Math.random() * colors.length)]

                const duration = Math.random() * 20 + 10
                circle.style.animationDuration = `${duration}s`

                circle.style.setProperty("--x-multiplier", Math.random() > 0.5 ? 0.05 : -0.05)
                circle.style.setProperty("--y-multiplier", Math.random() > 0.5 ? 0.05 : -0.05)

                circlesContainer.appendChild(circle)
            }
        }

        // Navbar scroll effect
        const onScroll = () => {
            const navbar = document.querySelector(".navbar")
            if (window.scrollY > 50) {
                navbar?.classList.add("scrolled")
            } else {
                navbar?.classList.remove("scrolled")
            }
        }

        // Mobile menu toggle
        const hamburger = document.querySelector(".hamburger")
        const navLinks = document.querySelector(".nav-links")

        const onHamburgerClick = () => {
            navLinks?.classList.toggle("active")
        }

        hamburger?.addEventListener("click", onHamburgerClick)
        window.addEventListener("scroll", onScroll)

        // Initialize
        createCircles()
        setTimeout(typeWriter, 1000)

        return () => {
            hamburger?.removeEventListener("click", onHamburgerClick)
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    return (
        <>
            <section className="home-section" id="home">
                <div className="z1">
                    <div className="circles" id="circles"></div>
                    <h1 className="name">Drashti</h1>
                    <p className="description">
                        I'm a <span className="text-white">passionate</span> and <span className="text-white">dedicated</span>{" "}
                        <span className="text-white">full-stack developer</span> with{" "}
                        <span className="text-white">3.7 years of experience</span> specializing in{" "}
                        <span className="text-white">Next.js</span> and <span className="text-white">Node.js</span>. My expertise
                        spans across both <span className="text-white">frontend and backend development</span>, where I focus on
                        building <span className="text-white">scalable</span>, <span className="text-white">efficient</span>, and{" "}
                        <span className="text-white">high-performing</span> web applications. I have a solid understanding of{" "}
                        <span className="text-white">modern development practices</span> and am committed to delivering{" "}
                        <span className="text-white">innovative solutions</span>.
                    </p>
                    <div className="typewriter-container">
                        <span className="typewriter" id="typewriter"></span>
                        <span className="cursor"></span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="./assets/resume.pdf" download="Drashti_FullStack-NextJS_resume.pdf" className="custom-btn me-3">
                            Download CV
                        </a>
                        {1 != 1 ? (
                            <Link href="#contact" className="custom-btn-1">
                                Contact me
                            </Link>
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="round round-top-left"></div>
                    <div className="round round-bottom-right"></div>
                </div>
            </section>

            <section className="skills-section" id="skill">
                <h2 className="skills-title">My Skills</h2>
                <p className="skills-description">
                    A comprehensive collection of technologies I work with, ranging from frontend frameworks to backend solutions
                    and development tools.
                </p>

                <div className="skills-container">
                    <div className="skills-scroll">
                        <div className="skill-group">
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/javascript.png" alt="JavaScripticon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">JavaScript</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/html.png" alt="HTMLicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">HTML</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/css.png" alt="CSSicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">CSS</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/bootstrap.png" alt="Bootstrapicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">Bootstrap</span>
                            </div>

                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/angularjs.png" alt="AngularJSicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">AngularJS</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/websocket.png" alt="WebSocketicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">WebSocket</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/nextjs.png" alt="Next.js icon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">Next.js</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/reactjs.png" alt="React.jsicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">React.js</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/nodejs.png" alt="Node.jsicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">Node.js</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/mysql.png" alt="MySQLicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">MySQL</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/mongodb.png" alt="MongoDBicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">MongoDB</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/postgressql.png" alt="PostgreSQLicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">PostgreSQL</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/api.png" alt="API Integrationicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">API Integration</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/tailwind.png" alt="API Integrationicon" width={50} height={50}></Image>
                                </div>
                                <span className="skill-name">TailwindCSS</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/github.png" alt="API Integrationicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">Git & Github</span>
                            </div>
                        </div>
                        <div className="skill-group">
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/javascript.png" alt="JavaScripticon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">JavaScript</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/html.png" alt="HTMLicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">HTML</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/css.png" alt="CSSicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">CSS</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/bootstrap.png" alt="Bootstrapicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">Bootstrap</span>
                            </div>

                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/angularjs.png" alt="AngularJSicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">AngularJS</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/websocket.png" alt="WebSocketicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">WebSocket</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/nextjs.png" alt="Next.js icon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">Next.js</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/reactjs.png" alt="React.jsicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">React.js</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/nodejs.png" alt="Node.jsicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">Node.js</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/mysql.png" alt="MySQLicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">MySQL</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/mongodb.png" alt="MongoDBicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">MongoDB</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/postgressql.png" alt="PostgreSQLicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">PostgreSQL</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/api.png" alt="API Integrationicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">API Integration</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/tailwind.png" alt="API Integrationicon" width={50} height={50}></Image>
                                </div>
                                <span className="skill-name">TailwindCSS</span>
                            </div>
                            <div className="skill-item">
                                <div className="skill-icon">
                                    <Image src="./assets/images/skills/github.png" alt="API Integrationicon" width={80} height={80}></Image>
                                </div>
                                <span className="skill-name">Git & Github</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section" id="about">
                <div className="about-background">
                    <div className="about-circles" id="about-circles"></div>
                    <div className="about-container">
                        <h2 className="about-title">About Me</h2>
                        <p className="skills-description">                            Crafting digital experiences with passion, precision, and innovation                        </p>

                        <div className="about-content">
                            <div className="about-card">
                                <div className="about-card-header">
                                    <div className="about-icon">🚀</div>
                                    <h3>My Journey</h3>
                                </div>
                                <p className="about-text">
                                    With <span className="highlight">3.7 years of experience</span> in full-stack development, I've evolved from a curious beginner to a seasoned professional who transforms complex problems into elegant digital solutions. My journey spans across diverse industries including <span className="highlight">blockchain technology</span>, <span className="highlight">sports betting platforms</span>, <span className="highlight">healthcare applications</span>, and <span className="highlight">enterprise solutions</span>.
                                </p>
                            </div>

                            <div className="about-card">
                                <div className="about-card-header">
                                    <div className="about-icon">💡</div>
                                    <h3>My Expertise</h3>
                                </div>
                                <p className="about-text">
                                    I specialize in building <span className="highlight">fast, scalable, and user-friendly</span> web applications using cutting-edge technologies like <span className="highlight">Next.js, React.js, and Node.js</span>. My expertise encompasses the entire development lifecycle - from crafting intuitive user interfaces to architecting robust backend systems that handle thousands of concurrent users.
                                </p>
                            </div>

                            <div className="about-card">
                                <div className="about-card-header">
                                    <div className="about-icon">🎯</div>
                                    <h3>My Approach</h3>
                                </div>
                                <p className="about-text">
                                    I believe in <span className="highlight">clean code architecture</span> and <span className="highlight">performance optimization</span>. Every line of code I write is crafted with scalability and maintainability in mind. I thrive in collaborative environments, bringing a <span className="highlight">problem-solving mindset</span> and <span className="highlight">continuous learning</span> approach to every project I undertake.
                                </p>
                            </div>

                            <div className="about-card">
                                <div className="about-card-header">
                                    <div className="about-icon">🌟</div>
                                    <h3>My Impact</h3>
                                </div>
                                <p className="about-text">
                                    Beyond writing code, I create <span className="highlight">digital experiences that deliver real-world impact</span>. Whether working independently or as part of a team, I consistently deliver solutions that not only meet technical requirements but also exceed user expectations. My passion for innovation drives me to stay ahead of industry trends and implement the latest best practices.
                                </p>
                            </div>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-number">3.7+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Projects Completed</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">15+</div>
                                <div className="stat-label">Technologies Mastered</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    <div className="about-round about-round-left"></div>
                    <div className="about-round about-round-right"></div>
                </div>
            </section>

            <section className="skills-section" >
                <div className="black">
                    <div className="coming_soon">COMING</div>
                </div>
                <div className="white">
                    <div className="coming_soon">
                        SOON
                        <span className="blinking-dots">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </span>
                    </div>
                </div>
            </section >
        </>
    )
}
