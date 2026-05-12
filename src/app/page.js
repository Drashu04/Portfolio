"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useRef, useEffect } from 'react';


const experienceData = [
    {
        id: 1,
        company: 'TechFlow Solutions',
        role: 'AI & Cloud Developer',
        duration: 'Jan 2022 - Present',
        description: 'Leading full-stack development initiatives for enterprise-level applications. Specializing in Python and React development, implementing DevOps in the cloud and maintaining excellent code quality.',
        achievements: [
            'Reduced application load times by 40% through optimized React components',
            'Implemented microservice architecture and boosted API performance',
            'Led team of 5 developers in agile development processes'
        ],
        technologies: [
            { name: 'Python', color: 'from-green-400 to-green-600' },
            { name: 'ReactJS', color: 'from-blue-400 to-blue-600' },
            { name: 'PostgreSQL', color: 'from-purple-400 to-purple-600' },
            { name: 'MongoDB', color: 'from-green-500 to-green-700' },
            { name: 'Docker', color: 'from-blue-500 to-blue-700' }
        ],
        icon: '🚀',
        position: 'left'
    },
    {
        id: 2,
        company: 'Digital Innovations Hub',
        role: 'Full Stack Developer',
        duration: 'Jun 2020 - Aug 2021',
        description: 'Specialized in creating responsive web applications and building REST APIs. Experienced with various technology stacks like Django and Node.js. Implemented data analytics performance across all devices.',
        achievements: [
            'Designed and launched responsive website across all client projects',
            'Developed and deployed RESTful APIs with Python and Node.js',
            'Contributed to open-source React component library'
        ],
        technologies: [
            { name: 'ReactJS', color: 'from-blue-400 to-blue-600' },
            { name: 'NodeJS', color: 'from-green-600 to-green-800' },
            { name: 'CSS', color: 'from-yellow-400 to-yellow-600' },
            { name: 'JavaScript', color: 'from-yellow-500 to-yellow-700' },
            { name: 'MongoDB', color: 'from-green-500 to-green-700' }
        ],
        icon: '💡',
        position: 'right'
    }
];

const stats = [
    { value: '5+', label: 'Years of Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' }
];

const skillsData = [
    { name: 'JavaScript', category: 'Frontend', icon: './assets/images/skills/javascript.png' },
    { name: 'HTML', category: 'Frontend', icon: './assets/images/skills/html.png' },
    { name: 'CSS', category: 'Frontend', icon: './assets/images/skills/css.png' },
    { name: 'Bootstrap', category: 'Frontend', icon: './assets/images/skills/bootstrap.png' },
    { name: 'AngularJS', category: 'Frontend', icon: './assets/images/skills/angularjs.png' },
    { name: 'WebSocket', category: 'Backend', icon: './assets/images/skills/websocket.png' },
    { name: 'Next.js', category: 'Frontend', icon: './assets/images/skills/nextjs.png' },
    { name: 'React.js', category: 'Frontend', icon: './assets/images/skills/reactjs.png' },
    { name: 'Node.js', category: 'Backend', icon: './assets/images/skills/nodejs.png' },
    { name: 'MySQL', category: 'Database', icon: './assets/images/skills/mysql.png' },
    { name: 'MongoDB', category: 'Database', icon: './assets/images/skills/mongodb.png' },
    { name: 'PostgreSQL', category: 'Database', icon: './assets/images/skills/postgressql.png' },
    { name: 'API Integration', category: 'Other', icon: './assets/images/skills/api.png' },
    { name: 'TailwindCSS', category: 'Frontend', icon: './assets/images/skills/tailwind.png' },
    { name: 'Git & Github', category: 'Other', icon: './assets/images/skills/github.png' },
];

export default function Home() {

    const [activeTab, setActiveTab] = useState('All');
    const [pendingTab, setPendingTab] = useState(null);
    const [animationPhase, setAnimationPhase] = useState('none');
    const scrollRef = useRef(null);

    const handleTabChange = (tab) => {
        if (tab === activeTab) return;
        setPendingTab(tab);
        setAnimationPhase('out');
    };

    useEffect(() => {
        const handleAnimationEnd = () => {
            if (animationPhase === 'out') {
                setActiveTab(pendingTab);
                setPendingTab(null);
                setAnimationPhase('in');
            } else if (animationPhase === 'in') {
                setAnimationPhase('none');
            }
        };

        const elem = scrollRef.current;
        if (elem) {
            elem.addEventListener('animationend', handleAnimationEnd);
            return () => elem.removeEventListener('animationend', handleAnimationEnd);
        }
    }, [animationPhase, pendingTab]);

    const filteredSkills = activeTab === 'All'
        ? skillsData
        : skillsData.filter(skill => skill.category === activeTab);

    useEffect(() => {
        // Fix for "document is not defined" in Next.js
        if (typeof document === 'undefined') return;

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
            if (!typewriterElement) return;

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
            if (!circlesContainer) return;

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

    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "DeFi Yield Optimizer",
            description: "Real-time yield farming dashboard with smart contract integration, wallet connection and multi-chain support.",
            image: "/images/projects/defi-dashboard.jpg",
            categories: ["blockchain", "frontend"],
            tech: ["Next.js", "Solidity", "Web3.js", "Tailwind"],
            link: "#"
        },
        {
            id: 2,
            title: "Real-Time Sports Betting Platform",
            description: "Live odds updates via WebSocket, secure payment gateway, responsive UI and admin dashboard.",
            image: "/images/projects/live-betting.jpg",
            categories: ["frontend", "backend"],
            tech: ["React", "Node.js", "Socket.io", "MongoDB"],
            link: "#"
        },
        {
            id: 3,
            title: "Intelligent Customer Support Bot",
            description: "Context-aware AI chatbot with conversation memory, document retrieval and multi-language support.",
            image: "/images/projects/ai-chatbot.jpg",
            categories: ["ai", "frontend"],
            tech: ["React", "LangChain", "FastAPI", "OpenAI"],
            link: "#"
        },
        {
            id: 4,
            title: "NFT Marketplace with Lazy Minting",
            description: "Gas-efficient NFT platform with lazy minting, auction system and royalty enforcement.",
            image: "/images/projects/nft-marketplace.jpg",
            categories: ["blockchain", "frontend", "backend"],
            tech: ["Next.js", "Solidity", "IPFS", "The Graph"],
            link: "#"
        },
        {
            id: 5,
            title: "Predictive Maintenance Dashboard",
            description: "ML-powered industrial dashboard for equipment failure prediction using time-series data.",
            image: "/images/projects/predictive-maintenance.jpg",
            categories: ["ai", "frontend", "backend"],
            tech: ["React", "Python", "TensorFlow", "FastAPI"],
            link: "#"
        },
        // Add more projects here...
    ];

    useEffect(() => {
        const cards = document.querySelectorAll(`.projectCard`);
        cards.forEach(card => {
            const categories = card.dataset.category?.split(' ') || [];
            if (activeFilter === 'all' || categories.includes(activeFilter)) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 400);
            }
        });
    }, [activeFilter]);

    return (
        <>
            <section className="home-section" id="home">
                <div className="z1">
                    <div className="circles" id="circles"></div>
                    <h1 className="name">Drashti</h1>
                    <p className="description">
                        I'm a <span className="text-white">passionate</span> and <span className="text-white">dedicated</span>{" "}
                        <span className="text-white">full-stack developer</span> with{" "}
                        <span className="text-white">5 years of experience</span> specializing in{" "}
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
                <div className="about-background container">
                    <div className="about-circles" id="about-circles"></div>
                    <div className="about-container">
                        <h2 className="about-title">About Me</h2>
                        <p className="skills-description">
                            Crafting digital experiences with passion, precision, and innovation</p>
                        <div className="about-content">
                            <div className="about-card">
                                <div className="about-card-header">
                                    <div className="about-icon">🚀</div>
                                    <h3>My Journey</h3>
                                </div>
                                <p className="about-text">
                                    With <span npm="highlight">5 years of experience</span> in full-stack development, I've evolved from a curious beginner to a seasoned professional who transforms complex problems into elegant digital solutions. My journey spans across diverse industries including <span className="highlight">blockchain technology</span>, <span className="highlight">sports betting platforms</span>, <span className="highlight">healthcare applications</span>, and <span className="highlight">enterprise solutions</span>.
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
                                <div className="stat-number">4.5+</div>
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

            {/* <section className="skills-section" >
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
            </section >*/}

            <section className="experience-section" id="experience">
                <div className="container">
                    <h2 className="section-title">Professional Journey</h2>

                    <div className="timeline">
                        <div className="timeline-line"></div>

                        {/* Item 1 */}
                        <div className="timeline-item left">
                            <div className="timeline-dot"></div>
                            <div className="timeline-card">
                                <div className="card-content">
                                    <h4 className="company">Vasundhara Infotech</h4>
                                    <h5 className="role">Full-Stack Developer</h5>
                                    <p className="period">January 2025 – Present</p>
                                    <p className="description">
                                        Spearheaded development of blockchain-based web applications using Next.js and Node.js.
                                        Optimized high-traffic systems and collaborated on enterprise solutions, enhancing
                                        performance and user experience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="timeline-item right">
                            <div className="timeline-dot"></div>
                            <div className="timeline-card">
                                <div className="card-content">
                                    <h4 className="company">Rain Infotech</h4>
                                    <h5 className="role">Full-Stack Developer</h5>
                                    <p className="period">June 2021 – April 2025</p>
                                    <p className="description">
                                        Built responsive web applications with React.js and integrated APIs for sports betting
                                        and healthcare platforms. Implemented WebSocket for real-time features and enhanced
                                        UI with Bootstrap.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Add more items here */}
                    </div>
                </div>
            </section>

            <section className='projectsSection' id="projects" >
                <div className='backgroundAnimation'></div>

                <div className="container">
                    <h2 className="sectionTitle">Featured Projects</h2>
                    <p className={`sectionSubtitle`}>
                        A collection of full-stack, blockchain and AI-powered applications I've built
                    </p>

                    {/* Filters */}
                    <div className={`filterBar`}>
                        <button
                            className={`filterBtn ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            All
                        </button>
                        <button
                            className={`filterBtn ${activeFilter === 'frontend' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('frontend')}
                        >
                            Frontend
                        </button>
                        <button
                            className={`filterBtn ${activeFilter === 'backend' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('backend')}
                        >
                            Backend
                        </button>
                        <button
                            className={`filterBtn ${activeFilter === 'ai' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('ai')}
                        >
                            AI / ML
                        </button>
                        <button
                            className={`filterBtn ${activeFilter === 'blockchain' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('blockchain')}
                        >
                            Blockchain
                        </button>
                    </div>

                    {/* Projects Grid */}
                    <div className={`projectsGrid`}>
                        {projects.map(project => (
                            <div
                                key={project.id}
                                className={`projectCard`}
                                data-category={project.categories.join(' ')}
                            >
                                <div className={`projectImageWrapper`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`projectImage`}
                                    />
                                    <div className={`imageOverlay`}>
                                        <a href={project.link} className={`viewBtn`}>
                                            View Project
                                        </a>
                                    </div>
                                </div>
                                <div className={`projectContent`}>
                                    <h3 className={`projectTitle`}>{project.title}</h3>
                                    <p className={`projectDesc`}>{project.description}</p>
                                    <div className={`techTags`}>
                                        {project.tech.map((tag, idx) => (
                                            <span key={idx}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}



// "use client"
// import Image from "next/image"
// import Link from "next/link"
// import React, { useState, useRef, useEffect } from 'react';


// const experienceData = [
//     {
//         id: 1,
//         company: 'TechFlow Solutions',
//         role: 'AI & Cloud Developer',
//         duration: 'Jan 2022 - Present',
//         description: 'Leading full-stack development initiatives for enterprise-level applications. Specializing in Python and React development, implementing DevOps in the cloud and maintaining excellent code quality.',
//         achievements: [
//             'Reduced application load times by 40% through optimized React components',
//             'Implemented microservice architecture and boosted API performance',
//             'Led team of 5 developers in agile development processes'
//         ],
//         technologies: [
//             { name: 'Python', color: 'from-green-400 to-green-600' },
//             { name: 'ReactJS', color: 'from-blue-400 to-blue-600' },
//             { name: 'PostgreSQL', color: 'from-purple-400 to-purple-600' },
//             { name: 'MongoDB', color: 'from-green-500 to-green-700' },
//             { name: 'Docker', color: 'from-blue-500 to-blue-700' }
//         ],
//         icon: '🚀',
//         position: 'left'
//     },
//     {
//         id: 2,
//         company: 'Digital Innovations Hub',
//         role: 'Full Stack Developer',
//         duration: 'Jun 2020 - Aug 2021',
//         description: 'Specialized in creating responsive web applications and building REST APIs. Experienced with various technology stacks like Django and Node.js. Implemented data analytics performance across all devices.',
//         achievements: [
//             'Designed and launched responsive website across all client projects',
//             'Developed and deployed RESTful APIs with Python and Node.js',
//             'Contributed to open-source React component library'
//         ],
//         technologies: [
//             { name: 'ReactJS', color: 'from-blue-400 to-blue-600' },
//             { name: 'NodeJS', color: 'from-green-600 to-green-800' },
//             { name: 'CSS', color: 'from-yellow-400 to-yellow-600' },
//             { name: 'JavaScript', color: 'from-yellow-500 to-yellow-700' },
//             { name: 'MongoDB', color: 'from-green-500 to-green-700' }
//         ],
//         icon: '💡',
//         position: 'right'
//     }
// ];

// const stats = [
//     { value: '5+', label: 'Years of Experience' },
//     { value: '50+', label: 'Projects Delivered' },
//     { value: '100%', label: 'Client Satisfaction' }
// ];

// const skillsData = [
//     { name: 'JavaScript', category: 'Frontend', icon: './assets/images/skills/javascript.png' },
//     { name: 'HTML', category: 'Frontend', icon: './assets/images/skills/html.png' },
//     { name: 'CSS', category: 'Frontend', icon: './assets/images/skills/css.png' },
//     { name: 'Bootstrap', category: 'Frontend', icon: './assets/images/skills/bootstrap.png' },
//     { name: 'AngularJS', category: 'Frontend', icon: './assets/images/skills/angularjs.png' },
//     { name: 'WebSocket', category: 'Backend', icon: './assets/images/skills/websocket.png' },
//     { name: 'Next.js', category: 'Frontend', icon: './assets/images/skills/nextjs.png' },
//     { name: 'React.js', category: 'Frontend', icon: './assets/images/skills/reactjs.png' },
//     { name: 'Node.js', category: 'Backend', icon: './assets/images/skills/nodejs.png' },
//     { name: 'MySQL', category: 'Database', icon: './assets/images/skills/mysql.png' },
//     { name: 'MongoDB', category: 'Database', icon: './assets/images/skills/mongodb.png' },
//     { name: 'PostgreSQL', category: 'Database', icon: './assets/images/skills/postgressql.png' },
//     { name: 'API Integration', category: 'Other', icon: './assets/images/skills/api.png' },
//     { name: 'TailwindCSS', category: 'Frontend', icon: './assets/images/skills/tailwind.png' },
//     { name: 'Git & Github', category: 'Other', icon: './assets/images/skills/github.png' },
// ];

// export default function Home() {

//     const [activeTab, setActiveTab] = useState('All');
//     const [pendingTab, setPendingTab] = useState(null);
//     const [animationPhase, setAnimationPhase] = useState('none');
//     const scrollRef = useRef(null);

//     const handleTabChange = (tab) => {
//         if (tab === activeTab) return;
//         setPendingTab(tab);
//         setAnimationPhase('out');
//     };

//     useEffect(() => {
//         const handleAnimationEnd = () => {
//             if (animationPhase === 'out') {
//                 setActiveTab(pendingTab);
//                 setPendingTab(null);
//                 setAnimationPhase('in');
//             } else if (animationPhase === 'in') {
//                 setAnimationPhase('none');
//             }
//         };

//         const elem = scrollRef.current;
//         if (elem) {
//             elem.addEventListener('animationend', handleAnimationEnd);
//             return () => elem.removeEventListener('animationend', handleAnimationEnd);
//         }
//     }, [animationPhase, pendingTab]);

//     const filteredSkills = activeTab === 'All'
//         ? skillsData
//         : skillsData.filter(skill => skill.category === activeTab);

//     // ==================== FIXED USEEFFECT ====================
//     useEffect(() => {
//         // Fix for "document is not defined" in Next.js
//         if (typeof document === 'undefined') return;

//         // Typewriter effect
//         const typewriterElement = document.getElementById("typewriter")
//         const phrases = [
//             "Full-Stack Developer",
//             "Next.js Specialist",
//             "Web Application Developer",
//             "Scalable Solutions Expert",
//             "Efficient Code Engineer",
//             "Creative Problem Solver",
//             "Passionate Software Engineer",
//             "Frontend & Backend Developer",
//             "Innovative Thinker",
//             "UI/UX Designer",
//             "Problem Solver",
//             "Creative Thinker",
//             "Tech Enthusiast",
//         ]

//         let phraseIndex = 0
//         let charIndex = 0
//         let isDeleting = false
//         let isEnd = false

//         function typeWriter() {
//             if (!typewriterElement) return;

//             isEnd = false
//             const currentPhrase = phrases[phraseIndex]

//             if (isDeleting) {
//                 typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1)
//                 charIndex--
//             } else {
//                 typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1)
//                 charIndex++
//             }

//             if (!isDeleting && charIndex === currentPhrase.length) {
//                 isEnd = true
//                 isDeleting = true
//                 setTimeout(typeWriter, 2000)
//             } else if (isDeleting && charIndex === 0) {
//                 isDeleting = false
//                 phraseIndex = (phraseIndex + 1) % phrases.length
//                 setTimeout(typeWriter, 500)
//             } else {
//                 const speed = isDeleting ? 100 : 150
//                 setTimeout(typeWriter, isEnd ? speed * 2 : speed)
//             }
//         }

//         // Floating circles background
//         function createCircles() {
//             const circlesContainer = document.getElementById("circles")
//             if (!circlesContainer) return;

//             const colors = [
//                 "rgba(255, 107, 107, 0.3)",
//                 "rgba(255, 159, 67, 0.3)",
//                 "rgba(29, 209, 161, 0.3)",
//                 "rgba(72, 219, 251, 0.3)",
//                 "rgba(120, 111, 166, 0.3)",
//                 "rgba(225, 112, 85, 0.3)",
//             ]

//             for (let i = 0; i < 30; i++) {
//                 const circle = document.createElement("div")
//                 circle.classList.add("circle")

//                 const size = Math.random() * 15 + 5
//                 circle.style.width = `${size}px`
//                 circle.style.height = `${size}px`

//                 circle.style.left = `${Math.random() * 100}%`
//                 circle.style.top = `${Math.random() * 100}%`

//                 circle.style.background = colors[Math.floor(Math.random() * colors.length)]

//                 const duration = Math.random() * 20 + 10
//                 circle.style.animationDuration = `${duration}s`

//                 circle.style.setProperty("--x-multiplier", Math.random() > 0.5 ? 0.05 : -0.05)
//                 circle.style.setProperty("--y-multiplier", Math.random() > 0.5 ? 0.05 : -0.05)

//                 circlesContainer.appendChild(circle)
//             }
//         }

//         // Navbar scroll effect
//         const onScroll = () => {
//             const navbar = document.querySelector(".navbar")
//             if (window.scrollY > 50) {
//                 navbar?.classList.add("scrolled")
//             } else {
//                 navbar?.classList.remove("scrolled")
//             }
//         }

//         // Mobile menu toggle
//         const hamburger = document.querySelector(".hamburger")
//         const navLinks = document.querySelector(".nav-links")

//         const onHamburgerClick = () => {
//             navLinks?.classList.toggle("active")
//         }

//         hamburger?.addEventListener("click", onHamburgerClick)
//         window.addEventListener("scroll", onScroll)

//         // Initialize
//         createCircles()
//         setTimeout(typeWriter, 1000)

//         return () => {
//             hamburger?.removeEventListener("click", onHamburgerClick)
//             window.removeEventListener("scroll", onScroll)
//         }
//     }, [])

//     const [activeFilter, setActiveFilter] = useState('all');

//     const projects = [
//         {
//             id: 1,
//             title: "DeFi Yield Optimizer",
//             description: "Real-time yield farming dashboard with smart contract integration, wallet connection and multi-chain support.",
//             image: "/images/projects/defi-dashboard.jpg",
//             categories: ["blockchain", "frontend"],
//             tech: ["Next.js", "Solidity", "Web3.js", "Tailwind"],
//             link: "#"
//         },
//         {
//             id: 2,
//             title: "Real-Time Sports Betting Platform",
//             description: "Live odds updates via WebSocket, secure payment gateway, responsive UI and admin dashboard.",
//             image: "/images/projects/live-betting.jpg",
//             categories: ["frontend", "backend"],
//             tech: ["React", "Node.js", "Socket.io", "MongoDB"],
//             link: "#"
//         },
//         {
//             id: 3,
//             title: "Intelligent Customer Support Bot",
//             description: "Context-aware AI chatbot with conversation memory, document retrieval and multi-language support.",
//             image: "/images/projects/ai-chatbot.jpg",
//             categories: ["ai", "frontend"],
//             tech: ["React", "LangChain", "FastAPI", "OpenAI"],
//             link: "#"
//         },
//         {
//             id: 4,
//             title: "NFT Marketplace with Lazy Minting",
//             description: "Gas-efficient NFT platform with lazy minting, auction system and royalty enforcement.",
//             image: "/images/projects/nft-marketplace.jpg",
//             categories: ["blockchain", "frontend", "backend"],
//             tech: ["Next.js", "Solidity", "IPFS", "The Graph"],
//             link: "#"
//         },
//         {
//             id: 5,
//             title: "Predictive Maintenance Dashboard",
//             description: "ML-powered industrial dashboard for equipment failure prediction using time-series data.",
//             image: "/images/projects/predictive-maintenance.jpg",
//             categories: ["ai", "frontend", "backend"],
//             tech: ["React", "Python", "TensorFlow", "FastAPI"],
//             link: "#"
//         },
//     ];

//     useEffect(() => {
//         const cards = document.querySelectorAll(`.projectCard`);
//         cards.forEach(card => {
//             const categories = card.dataset.category?.split(' ') || [];
//             if (activeFilter === 'all' || categories.includes(activeFilter)) {
//                 card.style.display = 'block';
//                 setTimeout(() => {
//                     card.style.opacity = '1';
//                     card.style.transform = 'translateY(0)';
//                 }, 50);
//             } else {
//                 card.style.opacity = '0';
//                 card.style.transform = 'translateY(30px)';
//                 setTimeout(() => {
//                     card.style.display = 'none';
//                 }, 400);
//             }
//         });
//     }, [activeFilter]);

//     return (
//         <>
//             <section className="home-section" id="home">
//                 <div className="z1">
//                     <div className="circles" id="circles"></div>
//                     <h1 className="name">Drashti</h1>
//                     <p className="description">
//                         I'm a <span className="text-white">passionate</span> and <span className="text-white">dedicated</span>{" "}
//                         <span className="text-white">full-stack developer</span> with{" "}
//                         <span className="text-white">5 years of experience</span> specializing in{" "}
//                         <span className="text-white">Next.js</span> and <span className="text-white">Node.js</span>. My expertise
//                         spans across both <span className="text-white">frontend and backend development</span>, where I focus on
//                         building <span className="text-white">scalable</span>, <span className="text-white">efficient</span>, and{" "}
//                         <span className="text-white">high-performing</span> web applications. I have a solid understanding of{" "}
//                         <span className="text-white">modern development practices</span> and am committed to delivering{" "}
//                         <span className="text-white">innovative solutions</span>.
//                     </p>
//                     <div className="typewriter-container">
//                         <span className="typewriter" id="typewriter"></span>
//                         <span className="cursor"></span>
//                     </div>
//                     <div className="d-flex justify-content-center align-items-center">
//                         <a href="./assets/resume.pdf" download="Drashti_FullStack-NextJS_resume.pdf" className="custom-btn me-3">
//                             Download CV
//                         </a>
//                         {1 != 1 ? (
//                             <Link href="#contact" className="custom-btn-1">
//                                 Contact me
//                             </Link>
//                         ) : (
//                             ""
//                         )}
//                     </div>

//                     <div className="round round-top-left"></div>
//                     <div className="round round-bottom-right"></div>
//                 </div>
//             </section>

//             {/* All your other sections remain exactly the same */}
//             <section className="skills-section" id="skill">
//                 <h2 className="skills-title">My Skills</h2>
//                 <p className="skills-description">
//                     A comprehensive collection of technologies I work with, ranging from frontend frameworks to backend solutions
//                     and development tools.
//                 </p>

//                 <div className="skills-container">
//                     <div className="skills-scroll">
//                         <div className="skill-group">
//                             {/* ... your original skill items ... */}
//                             {skillsData.map(skill => (
//                                 <div key={skill.name} className="skill-item">
//                                     <div className="skill-icon">
//                                         <Image src={skill.icon} alt={`${skill.name}icon`} width={80} height={80} />
//                                     </div>
//                                     <span className="skill-name">{skill.name}</span>
//                                 </div>
//                             ))}
//                         </div>
//                         {/* Duplicate group for scrolling effect */}
//                         <div className="skill-group">
//                             {skillsData.map(skill => (
//                                 <div key={`${skill.name}-dup`} className="skill-item">
//                                     <div className="skill-icon">
//                                         <Image src={skill.icon} alt={`${skill.name}icon`} width={80} height={80} />
//                                     </div>
//                                     <span className="skill-name">{skill.name}</span>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Rest of your sections (About, Experience, Projects, etc.) are unchanged */}
//             {/* Copy-paste the rest of your original JSX from here onwards */}

//             <section className="about-section" id="about">
//                 {/* ... your original about section ... */}
//             </section>

//             <section className="skills-section" >
//                 <div className="black">
//                     <div className="coming_soon">COMING</div>
//                 </div>
//                 <div className="white">
//                     <div className="coming_soon">
//                         SOON
//                         <span className="blinking-dots">
//                             <span>.</span>
//                             <span>.</span>
//                             <span>.</span>
//                         </span>
//                     </div>
//                 </div>
//             </section >

//             <section id="experience" className="experience-section">
//                 <div className="container">
//                     <h2 className="section-title">Professional Journey</h2>

//                     <div className="timeline">
//                         <div className="timeline-line"></div>

//                         {/* Item 1 */}
//                         <div className="timeline-item left">
//                             <div className="timeline-dot"></div>
//                             <div className="timeline-card">
//                                 <div className="card-content">
//                                     <h4 className="company">Vasundhara Infotech</h4>
//                                     <h5 className="role">Full-Stack Developer</h5>
//                                     <p className="period">January 2025 – Present</p>
//                                     <p className="description">
//                                         Spearheaded development of blockchain-based web applications using Next.js and Node.js.
//                                         Optimized high-traffic systems and collaborated on enterprise solutions, enhancing
//                                         performance and user experience.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Item 2 */}
//                         <div className="timeline-item right">
//                             <div className="timeline-dot"></div>
//                             <div className="timeline-card">
//                                 <div className="card-content">
//                                     <h4 className="company">Rain Infotech</h4>
//                                     <h5 className="role">Full-Stack Developer</h5>
//                                     <p className="period">June 2021 – April 2025</p>
//                                     <p className="description">
//                                         Built responsive web applications with React.js and integrated APIs for sports betting
//                                         and healthcare platforms. Implemented WebSocket for real-time features and enhanced
//                                         UI with Bootstrap.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Add more items here */}
//                     </div>
//                 </div>
//             </section>

//             <section id="projects" className='projectsSection'>
//                 <div className='backgroundAnimation'></div>

//                 <div className="container">
//                     <h2 className="sectionTitle">Featured Projects</h2>
//                     <p className={`sectionSubtitle`}>
//                         A collection of full-stack, blockchain and AI-powered applications I've built
//                     </p>
//                     {/* Filters */}
//                     <div className={`filterBar`}>
//                         <button
//                             className={`filterBtn ${activeFilter === 'all' ? 'active' : ''}`}
//                             onClick={() => setActiveFilter('all')}
//                         >
//                             All
//                         </button>
//                         <button
//                             className={`filterBtn ${activeFilter === 'frontend' ? 'active' : ''}`}
//                             onClick={() => setActiveFilter('frontend')}
//                         >
//                             Frontend
//                         </button>
//                         <button
//                             className={`filterBtn ${activeFilter === 'backend' ? 'active' : ''}`}
//                             onClick={() => setActiveFilter('backend')}
//                         >
//                             Backend
//                         </button>
//                         <button
//                             className={`filterBtn ${activeFilter === 'ai' ? 'active' : ''}`}
//                             onClick={() => setActiveFilter('ai')}
//                         >
//                             AI / ML
//                         </button>
//                         <button
//                             className={`filterBtn ${activeFilter === 'blockchain' ? 'active' : ''}`}
//                             onClick={() => setActiveFilter('blockchain')}
//                         >
//                             Blockchain
//                         </button>
//                     </div>

//                     {/* Projects Grid */}
//                     <div className={`projectsGrid`}>
//                         {projects.map(project => (
//                             <div
//                                 key={project.id}
//                                 className={`projectCard`}
//                                 data-category={project.categories.join(' ')}
//                             >
//                                 <div className={`projectImageWrapper`}>
//                                     <img
//                                         src={project.image}
//                                         alt={project.title}
//                                         className={`projectImage`}
//                                     />
//                                     <div className={`imageOverlay`}>
//                                         <a href={project.link} className={`viewBtn`}>
//                                             View Project
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div className={`projectContent`}>
//                                     <h3 className={`projectTitle`}>{project.title}</h3>
//                                     <p className={`projectDesc`}>{project.description}</p>
//                                     <div className={`techTags`}>
//                                         {project.tech.map((tag, idx) => (
//                                             <span key={idx}>{tag}</span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }