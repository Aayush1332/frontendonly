import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <div>
      <div className="howitworks">
        <div className="container">
          <h3>How Resume Analyser Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
               Create a new account to access all our features. Fill in your details to get started!
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Explore a wide range of job opportunities tailored to your skills and preferences. Start your career journey today!
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For your Dream Job</p>
              <p>
              Submit your application for your dream job. Showcase your skills and experience to land the perfect role.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
