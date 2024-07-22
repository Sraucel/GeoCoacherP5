// src/components/lessonplans.js
import React from 'react';
import './lessonplans.css';

const LessonPlans = () => {
  const plans = [
    {
      title: "Basic",
      price: "23-30$ per hour",
      time: "1-2 times per week",
      teacher: "Jack Manning",
      resources: "Virtual or in-person. For beginner students, mainly aimed at middle to high schoolers.",
    },
    {
      title: "Premium",
      price: "40-$50 per hour",
      time: "1-4 times per week",
      teacher: "Jane Smith",
      resources: "Virtual or in-person. Mainly for novice to advanced students willing to engage in more deeper and longer lessons and extra activities.",
    },
    {
      title: "VIP",
      price: "$75 per hour",
      time: "Up to 7 times a week",
      teacher: "Emily Davis",
      resources: "This is reserved for students who are preparing for tests, exams or competitions and are looking for daily rigorious activites and resources to hone their skills. ",
    },
    {
        title: "Basic",
        price: "$25-50",
        time: "4 weeks",
        teacher: "George Encgois",
        resources: "For any basic coaching services provided to your pace and material.",
      },
      {
        title: "Advanced",
        price: "$50-70",
        time: "8 weeks",
        teacher: "Edward Morell",
        resources: "More intermediate teaching and techniques.",
      },
      {
        title: "Competitive",
        price: "$100",
        time: "12 weeks",
        teacher: "Michael Manning",
        resources: "For those looking for an extra advanced studying guide, similar to a bootcamp.",
      },
  ];

  return (
    <div className="lessonplans-wrapper">
      <div className="lessonplans-page">
        <h1>Our Lesson Plans</h1>
        <h2>Here is a list of all the coaching and tutoring plans. The first row is for TUTORING while the second row is for COACHING. You 
            can ask more questions by contacting us below.
        </h2>
        <div className="plans-container">
          {plans.map((plan, index) => (
            <div key={index} className="plan">
              <h2>{plan.title}</h2>
              <div className="details">
                <div>
                  <h3>Price</h3>
                  <p>{plan.price}</p>
                </div>
                <div>
                  <h3>Time</h3>
                  <p>{plan.time}</p>
                </div>
                <div>
                  <h3>Instructor</h3>
                  <p>{plan.teacher}</p>
                </div>
                <div>
                  <h3>Plan</h3>
                  <p>{plan.resources}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonPlans;
