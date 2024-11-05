import React, { useState } from 'react';
import '../css/AboutUs.css'; // 



const AboutUs = () => {
    // the visibility of the FAQ answers
    const [faqVisibility, setFaqVisibility] = useState({});

    const toggleAnswer = (index) => {
        // Update the visibility state for the clicked FAQ question
        setFaqVisibility((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <>
            
            <main>
                <div className="about-us-container">
                    <h1 className="heading">About Us</h1>

                    <div className="about-us-section">
                        <h2>Our Mission:</h2>
                        <p>
                            Our mission is to create a safe space where music lovers can explore and discover new artists,
                            new genres, and connect through shared musical experiences. We aim to celebrate the beauty of
                            music while providing a safe space to express opinions about music and engage in our music
                            quiz.
                        </p>
                    </div>

                    <div className="about-us-section">
                        <h2>FAQ:</h2>
                        {[
                            {
                                question: 'Can I leave comments on reviews?',
                                answer: 'Yes! We encourage you to share your thoughts and engage by leaving comments on our reviews.',
                            },
                            {
                                question: 'How can I submit my music for review?',
                                answer: 'You can submit your music through our contact form, and our team will review it for potential features on the site.',
                            },
                            {
                                question: 'What genres of music do you cover?',
                                answer: 'We cover a wide range of genres, mainly R&B, Rap, Indie, Alt, Hip-hop, Rock, and more! Our goal is to explore all genres and provide content for every music lover.',
                            },
                        ].map((item, index) => (
                            <div className="faq-question" key={index} onClick={() => toggleAnswer(index)}>
                                <p>{`Q: ${item.question}`}</p>
                                {faqVisibility[index] && (
                                    <div className="faq-answer" style={{ display: 'block' }}>
                                        <p>{`A: ${item.answer}`}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="about-us-section">
                        <h2>Contact Us:</h2>
                        <p>
                            If you have any additional questions, feel free to reach out to us through our{' '}
                            <a href="contact.html">Contact Me</a> page.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AboutUs;
