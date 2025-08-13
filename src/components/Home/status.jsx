import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.css';

const StatsCards = () => {
  const stats = [
    { number: "20K+", label: "Our Happy Students" },
    { number: "17K+", label: "Students Enrolled" },
    { number: "70+", label: "Expert Instructors" },
    { number: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="container py-5">
   <div className="text-center mb-5 stats-heading">
  <div className="stats-line">
    <span className="line"></span>
    <h3 className="stats-title">
      Trusted by <span className="highlight-companies">Companies</span> Achievements
    </h3>
    <span className="line"></span>
  </div>
</div>



      <div className="row text-center">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-4">
            <div className="card stat-card p-4">
              <h2 className="stat-number">{stat.number}</h2>
              <p className="stat-label mb-0">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
