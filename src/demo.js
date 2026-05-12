import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Assuming Bootstrap Icons are included

function Experience() {
    const articles = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        // Optional: Auto-activate first article or handle initial state
    }, []);

    const handleClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handlePrev = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        if (index > 0) {
            setActiveIndex(index - 1);
            articles.current[index - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    const handleNext = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        if (index < articles.current.length - 1) {
            setActiveIndex(index + 1);
            articles.current[index + 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    };

    return (
        <section id="experience" className="py-5 bg-dark text-light position-relative">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center flex-column mb-4">
                    <h1 className="mb-2 text-teal text-center display-4 fw-bold animate__animated animate__zoomIn">Professional Experience Roadmap</h1>
                    <p className="w-75 text-light text-center">A unique career journey showcasing my evolution as a full-stack developer, from foundational roles to advanced projects.</p>
                    <p className="w-75 text-light text-center">Explore each step to uncover detailed responsibilities, achievements, and technologies used in my professional path.</p>
                </div>

                <main id="infographic" className="d-flex flex-column align-items-center py-5 position-relative">
                    {/* Central glowing line for uniqueness */}
                    <div className="central-line"></div>

                    {/* Step 1: First Company */}
                    <section className="step one text-teal">
                        <div className="circle">
                            <i className="bi bi-briefcase-fill display-1 mb-3"></i>
                            <h4>STEP 1</h4>WebPulse Technologies (Jun 2020 - Dec 2021)
                        </div>
                        <article
                            ref={(el) => (articles.current[0] = el)}
                            data-step="1"
                            className={activeIndex === 0 ? 'active' : ''}
                            onClick={() => handleClick(0)}
                        >
                            <header className="d-flex align-items-center bg-teal bg-opacity-10">
                                <i className="bi bi-code-slash bg-teal text-dark"></i>
                                <h6 className="text-uppercase my-3 ps-4">Role & Responsibilities</h6>
                            </header>
                            <div className="body">
                                <small>
                                    1. Developed responsive web applications using React.js.<br />
                                    2. Integrated RESTful APIs for sports betting and healthcare platforms.<br />
                                    3. Enhanced user interfaces with Bootstrap and implemented WebSocket for real-time features.
                                </small>
                                <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-teal invisible" href="#" onClick={(e) => handlePrev(e, 0)}>Prev</a>
                                    <a className="btn btn-outline-teal" href="#" onClick={(e) => handleNext(e, 0)}>Next</a>
                                </div>
                            </div>
                        </article>
                        <article
                            ref={(el) => (articles.current[1] = el)}
                            data-step="2"
                            className={activeIndex === 1 ? 'active' : ''}
                            onClick={() => handleClick(1)}
                        >
                            <header className="d-flex align-items-center bg-teal bg-opacity-10">
                                <i className="bi bi-trophy bg-teal text-dark"></i>
                                <h6 className="text-uppercase my-3 ps-4">Key Achievements</h6>
                            </header>
                            <div className="body">
                                <small>
                                    1. Improved application performance by 30% through optimized code.<br />
                                    2. Successfully launched two major projects ahead of schedule.<br />
                                    3. Received recognition for innovative real-time data handling solutions.
                                </small>
                                <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-teal" href="#" onClick={(e) => handlePrev(e, 1)}>Prev</a>
                                    <a className="btn btn-outline-teal" href="#" onClick={(e) => handleNext(e, 1)}>Next</a>
                                </div>
                            </div>
                        </article>
                        <article
                            ref={(el) => (articles.current[2] = el)}
                            data-step="3"
                            className={activeIndex === 2 ? 'active' : ''}
                            onClick={() => handleClick(2)}
                        >
                            <header className="d-flex align-items-center bg-teal bg-opacity-10">
                                <i className="bi bi-tools bg-teal text-dark"></i>
                                <h6 className="text-uppercase my-3 ps-4">Technologies Used</h6>
                            </header>
                            <div className="body">
                                <small>
                                    1. React.js, Bootstrap, WebSocket.<br />
                                    2. Node.js for backend integration.<br />
                                    3. MySQL and MongoDB for data management.
                                </small>
                                <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-teal" href="#" onClick={(e) => handlePrev(e, 2)}>Prev</a>
                                    <a className="btn btn-outline-teal" href="#" onClick={(e) => handleNext(e, 2)}>Next</a>
                                </div>
                            </div>
                        </article>
                    </section>

                    {/* Step 2: Second Company */}
                    <section className="step two text-teal-light">
                        <div className="circle">
                            <i className="bi bi-briefcase-fill display-1 mb-3"></i>
                            <h4>STEP 2</h4>Tech Innovate Solutions (Jan 2025 - Present)
                        </div>
                        <article
                            ref={(el) => (articles.current[3] = el)}
                            data-step="4"
                            className={activeIndex === 3 ? 'active' : ''}
                            onClick={() => handleClick(3)}
                        >
                            <header className="d-flex align-items-center bg-teal-light bg-opacity-10">
                                <i className="bi bi-code-slash bg-teal-light text-dark"></i>
                                <h6 className="text-uppercase my-3 ps-4">Role & Responsibilities</h6>
                            </header>
                            <div className="body">
                                <small>
                                    1. Led development of scalable web applications using Next.js and Node.js.<br />
                                    2. Focused on blockchain-based solutions and enterprise platforms.<br />
                                    3. Optimized performance for high-traffic systems and collaborated with cross-functional teams.
                                </small>
                                <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-teal-light" href="#" onClick={(e) => handlePrev(e, 3)}>Prev</a>
                                    <a className="btn btn-outline-teal-light" href="#" onClick={(e) => handleNext(e, 3)}>Next</a>
                                </div>
                            </div>
                        </article>
                        <article
                            ref={(el) => (articles.current[4] = el)}
                            data-step="5"
                            className={activeIndex === 4 ? 'active' : ''}
                            onClick={() => handleClick(4)}
                        >
                            <header className="d-flex align-items-center bg-teal-light bg-opacity-10">
                                <i className="bi bi-trophy bg-teal-light text-dark"></i>
                                <h6 className="text-uppercase my-3 ps-4">Key Achievements</h6>
                            </header>
                            <div className="body">
                                <small>
                                    1. Developed enterprise solutions handling thousands of concurrent users.<br />
                                    2. Implemented performance optimizations reducing load times by 40%.<br />
                                    3. Contributed to blockchain projects enhancing security and scalability.
                                </small>
                                <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-teal-light" href="#" onClick={(e) => handlePrev(e, 4)}>Prev</a>
                                    <a className="btn btn-outline-teal-light" href="#" onClick={(e) => handleNext(e, 4)}>Next</a>
                                </div>
                            </div>
                        </article>
                        <article
                            ref={(el) => (articles.current[5] = el)}
                            data-step="6"
                            className={activeIndex === 5 ? 'active' : ''}
                            onClick={() => handleClick(5)}
                        >
                            <header className="d-flex align-items-center bg-teal-light bg-opacity-10">
                                <i className="bi bi-tools bg-teal-light text-dark"></i>
                                <h6 className="text-uppercase my-3 ps-4">Technologies Used</h6>
                            </header>
                            <div className="body">
                                <small>
                                    1. Next.js, Node.js, React.js.<br />
                                    2. PostgreSQL, API Integration, Git & GitHub.<br />
                                    3. TailwindCSS for styling enhancements.
                                </small>
                                <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-teal-light" href="#" onClick={(e) => handlePrev(e, 5)}>Prev</a>
                                    <a className="btn btn-outline-teal-light invisible" href="#" onClick={(e) => handleNext(e, 5)}>Next</a>
                                </div>
                            </div>
                        </article>
                    </section>
                </main>
            </div>
            <style jsx>{`
        .bg-dark {
          background-color: #121212 !important;
        }
        .text-teal {
          color: #00bcd4;
        }
        .text-teal-light {
          color: #4dd0e1;
        }
        .bg-teal {
          background-color: #00bcd4 !important;
        }
        .bg-teal-light {
          background-color: #4dd0e1 !important;
        }
        .btn-outline-teal {
          --bs-btn-color: #00bcd4;
          --bs-btn-border-color: #00bcd4;
          --bs-btn-hover-bg: #00bcd4;
          --bs-btn-hover-border-color: #00bcd4;
        }
        .btn-outline-teal-light {
          --bs-btn-color: #4dd0e1;
          --bs-btn-border-color: #4dd0e1;
          --bs-btn-hover-bg: #4dd0e1;
          --bs-btn-hover-border-color: #4dd0e1;
        }
        #infographic .circle {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 7px double #00bcd4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          padding: 40px;
          position: absolute;
          left: 50%;
          margin: 40px 0;
          background: radial-gradient(circle, rgba(0,188,212,0.1), transparent);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        #infographic .circle:hover {
          transform: scale(1.05) rotateY(10deg);
          box-shadow: 0 0 20px rgba(0,188,212,0.5);
        }
        #infographic section:nth-child(odd) .circle {
          transform: translateX(-100%);
        }
        #infographic article {
          max-width: 410px;
          margin-bottom: 20px;
          cursor: pointer;
          left: 50%;
          position: relative;
          perspective: 1000px;
        }
        #infographic article header {
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
          transition: transform 0.3s ease;
        }
        #infographic article header i {
          display: flex;
          font-size: 2em;
          border-radius: 50%;
          padding: 14px;
          transition: transform 0.4s;
          color: #121212;
          border: 16px solid #121212;
          margin: -16px 0 -16px -20px;
        }
        #infographic article:hover header i {
          transform: scale(1.2) rotateY(15deg);
        }
        #infographic article.active header i {
          transform: none;
        }
        #infographic article .body {
          background: #1a1a1a;
          padding: 0 20px;
          border-bottom-right-radius: 30px;
          border-bottom-left-radius: 30px;
          max-height: 0;
          transition: max-height 0.5s, padding 0.5s;
          overflow: hidden;
          border: 1px solid #00bcd4;
        }
        #infographic article .body .btn {
          padding: 3px 10px;
          text-transform: uppercase;
        }
        #infographic section:nth-child(even) article {
          text-align: right;
          transform: translateX(-100%);
        }
        #infographic section:nth-child(even) article header {
          flex-flow: row-reverse;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
        }
        #infographic section:nth-child(even) article header i {
          margin: -16px -20px -16px 0;
        }
        #infographic section:nth-child(odd) article.active header {
          border-bottom-right-radius: 0;
        }
        #infographic section:nth-child(even) article.active header {
          border-bottom-left-radius: 0;
        }
        #infographic article.active .body {
          padding: 20px;
          max-height: 300px;
        }
        /* Unique central line */
        .central-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 6px;
          background: linear-gradient(180deg, #00bcd4, #4dd0e1);
          transform: translateX(-50%);
          box-shadow: 0 0 15px rgba(0,188,212,0.5);
          animation: glow 2s ease-in-out infinite alternate;
        }
        /* Article positioning (adjusted for fewer steps) */
        #infographic article[data-step="1"] {
          margin-left: 6px;
        }
        #infographic article[data-step="2"] {
          margin-left: 54px;
        }
        #infographic article[data-step="3"] {
          margin-left: 71px;
        }
        #infographic article[data-step="4"] {
          margin-left: -70px;
        }
        #infographic article[data-step="5"] {
          margin-left: -21px;
        }
        #infographic article[data-step="6"] {
          margin-left: 7px;
        }
        /* 3D effects */
        #infographic article:hover {
          transform: rotateY(5deg) translateZ(10px);
          transition: transform 0.3s ease;
        }
        #infographic article.active {
          transform: rotateY(0deg) translateZ(20px);
        }
        /* Responsive */
        @media screen and (max-width: 768px) {
          #infographic .circle {
            position: relative;
            left: 0 !important;
            transform: none !important;
            margin: 20px auto;
          }
          #infographic article {
            left: 0 !important;
            transform: none !important;
            text-align: left !important;
            max-width: 100%;
            margin-left: 0 !important;
          }
          #infographic section:nth-child(even) article header {
            flex-flow: row !important;
            border-top-right-radius: 30px;
            border-bottom-right-radius: 30px;
          }
          #infographic section:nth-child(even) article header i {
            margin: -16px 0 -16px -20px !important;
          }
          .central-line {
            left: 20px;
          }
        }
        @keyframes glow {
          from { box-shadow: 0 0 10px rgba(0,188,212,0.3); }
          to { box-shadow: 0 0 20px rgba(0,188,212,0.7); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8) rotateY(-20deg); }
          to { opacity: 1; transform: scale(1) rotateY(0deg); }
        }
        .animate__zoomIn {
          animation: zoomIn 1s ease-in-out;
        }
      `}</style>
        </section>
    );
}

export default Experience;