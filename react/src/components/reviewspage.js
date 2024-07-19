import React from 'react';
import './reviewspage.css';
import person1 from '../pictures/person1.webp';
import person2 from '../pictures/person2.webp';
import person3 from '../pictures/person3.jpg';
import moreAboutUsImage from '../pictures/graph.png'; 

const reviews = [
  { id: 1, name: 'John Declan', image: person1, title: 'Great teaching', content: 'The tutoring service was excellent. Learned a lot!' },
  { id: 2, name: 'Donald Brandee', image: person2, title: 'Very Helpful', content: 'The coaching helped me see my passion for geography and now I am pursuing a degree in University for it!' },
  { id: 3, name: 'Irene Neha', image: person3, title: 'Professional', content: 'The staff is very professional, knowledgeable and helpful.' },
];

const statistics = [
  "90% of our tutors have completed or are currently pursuing PhD's, and are performing extensive research in Geography, Geology and Cartography.",
  '95% of our students have seen significant improvement in grades and exam scores',
  'We have had 10 former students that have gotten into Geography related programs at universities such as the University of Toronto, University of British Columbia, and the University of Waterloo'
];

const ReviewsPage = () => {
  return (
    <div className="reviews-page">
      <h1>Why Choose Us?</h1>
      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-box">
            <img src={review.image} alt={review.name} />
            <h2>{review.name}</h2>
            <h3>{review.title}</h3>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
      <div className="statistics-section">
        <h2>More about us</h2>
        <div className="statistics-content">
          <img src={moreAboutUsImage} alt="More about us" className="about-us-image" />
          <div className="statistics-text">
            {statistics.map((stat, index) => (
              <p key={index}>{stat}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
