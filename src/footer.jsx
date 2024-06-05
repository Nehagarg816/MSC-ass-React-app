//import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Lean In Mentorship. All rights reserved.</p>
                <br />
                <nav className="footer-nav">
                    <ul>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
