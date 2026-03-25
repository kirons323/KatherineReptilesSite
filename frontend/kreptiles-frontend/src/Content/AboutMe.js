import "../css/AboutMe.css";
import headshot from "../FileAssets/Images/headshot.jpg";
import resume from "../FileAssets/KatherineIrons_Resume.pdf";

export default function AboutMe() {

  return (
    <section className="about-container">
      <div className="about-card">
        <div className="about-top">
          <div className="about-image">
            <img src={ headshot } alt="Headshot" />
          </div>

          <div className="about-content">
            <h1>About Me</h1>
            <p className="about-summary">
              Hi! I'm someone who enjoys coding and having fun while doing so.
               Check out some of my exotic pet collection or crochet projects while you're here!
            </p>
            <a href={ resume } download="KatherineIrons_Resume.pdf" className="resume-button">
              Download Resume
            </a>
          </div>
        </div>


        <div className="timeline-section">
            <h2>Work Timeline</h2>
            <ul className="timeline-list">
            <li>
                <div className="timeline-year">2023-2025</div>
                <div className="timeline-details">
                    <h3 className="timeline-title">Senior Software Engineer</h3>
                    <i className="timeline-institution">Atlassian</i>
                    <p className="timeline-project">
                    Part of the "keep the lights on" team for Jira Align. We owned most of the building blocks for any work done in the application.
                    </p>
                </div>
            </li>
            <li>
                <div className="timeline-year">2021-2023</div>
                <div className="timeline-details">
                    <h3 className="timeline-title">Senior Software Engineer</h3>
                    <i className="timeline-institution">Center for Internet Security (CIS)</i>
                    <p className="timeline-project">
                    Responsible for Assessor/Dashboard products, which helped users assess their security posture on various operating systems.
                    </p>
                </div>
            </li>
            <li>
                <div className="timeline-year">2019-2021</div>
                <div className="timeline-details">
                    <h3 className="timeline-title">Software Engineer</h3>
                    <i className="timeline-institution">PTC</i>
                    <p className="timeline-project">
                    Dealt with all manner of projects (new features, bug bashes, security fixes) on ThingWorx, an IoT platform.
                    </p>
                </div>
            </li>
            <li>
                <div className="timeline-year">2017-2019</div>
                <div className="timeline-details">
                    <h3 className="timeline-title">Software Developer</h3>
                    <i className="timeline-institution">Optum</i>
                    <p className="timeline-project">
                    Initially part of the Technology Development Program, creating innovative "shark tank" projects to pitch to leadership 
                    that could help customers and the company.
                    </p>
                </div>
            </li>
            </ul>
        </div>


        <div className="timeline-section">
            <h2>Education Timeline</h2>
            <ul className="timeline-list">
            <li className="timeline-item">
                <div className="timeline-year">2020-2022</div>
                <div className="timeline-details">
                    <h3 className="timeline-title">Master's Degree</h3>
                    <i className="timeline-institution">Boston University</i>
                    <p className="timeline-project">
                    Majored in Computer Information Systems, with a concentration in IT Project Management.
                    </p>
                </div>
            </li>
            <li className="timeline-item">
                <div className="timeline-year">2013-2017</div>
                <div className="timeline-details">
                    <h3 className="timeline-title">Bachelor's of Science</h3>
                    <i className="timeline-institution">Rensselaer Polytechnic Institute</i>
                    <p className="timeline-project">
                    Double majored in Computer Science and Mathematics.
                    </p>
                </div>
            </li>
            </ul>
        </div>


        <div className="contact-section">
          <h2>Contact</h2>
          <div className="contact-links">
            <a href="mailto:kirons323@gmail.com" className="contact-link">
              📧 kirons323@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/katherine-m-irons/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              💼 LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}