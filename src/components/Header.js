"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        // Scroll effect for navbar
        const onScroll = () => {
            const navbar = document.querySelector(".navbar")
            if (window.scrollY > 50) {
                navbar?.classList.add("scrolled")
            } else {
                navbar?.classList.remove("scrolled")
            }
        }

        // IntersectionObserver for active link
        const sections = document.querySelectorAll("section[id]")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 } // Trigger when 50% of section is in view
        )

        sections.forEach((section) => observer.observe(section))

        window.addEventListener("scroll", onScroll)

        return () => {
            window.removeEventListener("scroll", onScroll)
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [])

    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault()
        setIsOpen(false) // Close mobile menu on click

        const targetId = href.replace("#", "")
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setActiveSection(targetId) // Set active section immediately
        }
    }


    return (
        <nav className="navbar navbar-expand-md fixed-top">
            <div className="container d-flex justify-content-between align-items-center">
                <Link className="navbar-brand d-flex align-items-center" href="/">
                    <Image src="./assets/images/logo.png" alt="Logo" width={170} height={50} />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`nav-links ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ms-auto align-items-center">
                        {[
                            { id: "home", label: "Home" },
                            { id: "skill", label: "Skill" },
                            { id: "project", label: "Projects" },
                            { id: "experience", label: "Experience" },
                            { id: "about", label: "About" },
                            { id: "contact", label: "Contact" },
                        ].map(({ id, label }) => (
                            <li key={id} className="nav-item">
                                <a
                                    className={`nav-link ${activeSection === id ? "active" : ""}`}
                                    href={`#${id}`}
                                    onClick={(e) => handleLinkClick(e, `#${id}`)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}