import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Zelle</h5>
              </div>
              <h6>Sep 2024 – Present</h6>
            </div>
            <p>
            Worked on the Instant Payment Request System, reducing delivery time by 30% through collaboration with cross-functional teams. Developed React frontends with Redux for real-time status tracking, increasing user interaction by 25%.
            Optimized PostgreSQL databases on AWS, improving query performance by 40% and cutting unauthorized access by 50%. Built secure Spring Boot APIs with AWS AppSync and SNS for real-time sync, reducing transaction time by 20%.
            Achieved 95% test coverage, integrated into AWS CodePipeline, and sped up development cycles by 35%. Deployed on AWS with auto-scaling and load balancing, ensuring 99.9% uptime and reducing deployment time by 50%.            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>CRISIL Ltd</h5>
              </div>
              <h6>Aug 2020 – Jul 2023</h6>
            </div>
            <p>
            Built a real-time Client Portfolio Management System from the ground up. Worked on React + Redux frontends with live updates via WebSockets, increasing user engagement by 40%. Developed Django REST APIs with async processing to cut response times by 35%. Designed and optimized PostgreSQL on Azure to handle millions of transactions, reducing query time by 45%. Secured the app with JWT, AES encryption, and role-based access. Achieved 95% test coverage and automated CI/CD with Azure DevOps, cutting manual QA by 60% and ensuring 99.9% uptime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
