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
                <h4>Software Engineer</h4>
                <h5>DXC Technology</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
            I gained hands-on experience with AWS and Azure, supporting cloud migrations, big data storage, and backend management for insurance systems while collaborating in Agile environments and enhancing production support workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>DXC Technology</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            I enhanced system reliability on IBM iSeries through debugging, SQL optimization, and scripting, while designing secure APIs and microservices, automating cloud deployments with AWS and Azure, deploying Dockerized microservices on Kubernetes, and enhancing API security, which earned me the DXC Champ Award for contributions to system reliability and automation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Citizens Bank</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Collaborated with cross-functional teams to develop a frontend using React and advanced state management, designed secure data architectures with PostgreSQL and AWS, built the backend with FastAPI, implemented CI/CD pipelines, and deployed the application on AWS, ensuring high performance and security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
