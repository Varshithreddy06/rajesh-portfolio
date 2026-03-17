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
                <h4>Software Engineering Intern</h4>
                <h5>We Promote You</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Integrated 4 backend API endpoints eliminating manual data-sync 
               steps saving 2 hours/week. Optimized front-end modules
                reducing page load lag by 15%..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Career;
