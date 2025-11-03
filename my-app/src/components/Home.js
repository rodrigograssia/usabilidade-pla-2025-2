import React from "react";
import "../styles/home.css";

const Home = ({titulo, links}) => {
    return (
        <main className="home-container container py-3">
            <h1 className="home-title">{titulo}</h1>

            <ul className="home-list list-unstyled">
                {links.map((link,idx) => (
                <li key={idx} className="home-list-item">
                    <a className="home-list-link" href={link.href}>{link.label}</a>
                </li>
            ))}
            </ul>
        </main>
    );
};

export default Home;