import React from 'react';
import './explore.css';
import lessonsImage from '../pictures/lessons.jpg';
import virtualMapsImage from '../pictures/virtual maps.webp';
import quizzesImage from '../pictures/quizzes.webp';
import otherImage from '../pictures/other.jpg';
import virtualmapspng from '../pictures/virtual maps.png'
import chatroom from '../pictures/chatroom.png'

const Explore = () => {
    const items = [
        {
            image: lessonsImage,
            title: "Lessons",
            description: "Tutoring, Coaching and Private Lessons",
            link: "/resource1"
        },
        {
            image: virtualmapspng,
            title: "Interactive Maps",
            description: "Interactive maps and websites",
            link: "/resource2"
        },
        {
            image: quizzesImage,
            title: "Games",
            description: "Games and fun activities",
            link: "/resource4"
        },
        {
            image: chatroom,
            title: "Forums",
            description: "Group forums used to interact with other individuals",
            link: "/resource3"
        },
        {
            image: otherImage,
            title: "Case Study and Analysis Tools",
            description: "Any tools that can be used to learn",
            link: "/resource4"
        },
        {
            image: virtualMapsImage,
            title: "Design your own ...",
            description: "Design whatever you want on a virtual map",
            link: "/resource4"
        }
    ];

    return (
        <section className="explore">
            <h1>Our Services</h1>
            <div className="explore-grid">
                {items.map((item, index) => (
                    <div key={index} className="explore-item">
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a href={item.link}>Explore</a>
                    </div>
                ))}
            </div>
            
        </section>
    );
};

export default Explore;
