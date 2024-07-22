import React, { useState } from 'react';
import './explore.css';
import lessonsImage from '../pictures/lessons.jpg';
import virtualMapsImage from '../pictures/virtual maps.webp';
import quizzesImage from '../pictures/quizzes.webp';
import otherImage from '../pictures/other.jpg';
import virtualmapspng from '../pictures/virtual maps.png';
import chatroom from '../pictures/chatroom.png';

const Explore = () => {
    const [showDropdown, setShowDropdown] = useState(null);

    const items = [
        {
            image: lessonsImage,
            title: "Lessons",
            description: "Tutoring, Coaching and Private Lessons",
            link: "/Booking"
        },
        {
            image: virtualmapspng,
            title: "Interactive Maps",
            description: "Interactive maps and websites",
            link: "/interactive-maps"
        },
        {
            image: quizzesImage,
            title: "Games",
            description: "Games and fun activities",
            link: "/resource4",
            isGame: true // Mark this item as having a dropdown
        },
        {
            image: chatroom,
            title: "Forums",
            description: "Group forums used to interact with other individuals",
            link: "/forums"
        },
       
        {
            image: virtualMapsImage,
            title: "Design your own ...",
            description: "Design whatever you want on a virtual map",
            link: "/mapmaker"
        }
    ];

    const handleGameClick = (index) => {
        setShowDropdown(showDropdown === index ? null : index);
    };

    return (
        <section className="explore">
            <h1>Our Services</h1>
            <div className="explore-grid">
                {items.map((item, index) => (
                    <div key={index} className="explore-item">
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <a 
                            href={item.link}
                            onClick={item.isGame ? (e) => { e.preventDefault(); handleGameClick(index); } : null}
                            className={item.isGame ? "dropdown-toggle" : ""}
                        >
                            Explore
                        </a>
                        {item.isGame && showDropdown === index && (
                            <div className="dropdown-content">
                                <li><a href="https://www.geoguessr.com/">GeoGuessr</a></li>
                                <li><a href="https://www.sporcle.com/games/category/geography">Sporcle</a></li>
                                <li><a href="https://www.seterra.com/">Seterra</a></li>
                                <li><a href="https://worldle.teuteuf.fr/y">Worldle</a></li>
                                <li><a href="https://globle-game.com/">Globle</a></li>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Explore;
