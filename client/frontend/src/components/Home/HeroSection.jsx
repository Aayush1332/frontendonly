import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1000+",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "100+",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "1000+",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1000+",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <div>
      <div className="heroSection">
        <div className="container">
          <div className="title">
            <h1>Apply for  a job that suits your  interests</h1>
            <h1> and skills.</h1>
            <p>
            Leverage our powerful web app to analyse your resume. 
            Get detailed feedback on whether you are qualified for applied position
            or not and improve your chances of landing your dream job.
            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
        <div className="details">
          {details.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="icon">{element.icon}</div>
                <div className="content">
                  <p>{element.title}</p>
                  <p>{element.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
