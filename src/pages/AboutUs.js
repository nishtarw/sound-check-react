import React, { useState } from 'react';
import '../css/AboutUs.css'; // Ensure the CSS for the form is included in this file

const AboutUs = () => {
    // State for managing FAQ visibility
    const [faqVisibility, setFaqVisibility] = useState({});

    const toggleAnswer = (index) => {
        setFaqVisibility((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    // State for managing the contact form submission result
    const [formResult, setFormResult] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormResult('Sending...'); // Show sending message

        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData);
        const json = JSON.stringify(formObject);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: json,
            });

            if (response.status === 200) {
                setFormResult('Email successfully sent!');
            } else {
                setFormResult('Sorry, your email wasn\'t sent.');
            }
        } catch (error) {
            console.error(error);
            setFormResult('Sorry, your email couldn\'t be sent.');
        }
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
                        {[{
                            question: 'Can I leave comments on reviews?',
                            answer: 'Yes! We encourage you to share your thoughts and engage by leaving comments on our reviews.',
                        }, {
                            question: 'How can I submit my music for review?',
                            answer: 'You can submit your music through our contact form, and our team will review it for potential features on the site.',
                        }, {
                            question: 'What genres of music do you cover?',
                            answer: 'We cover a wide range of genres, mainly R&B, Rap, Indie, Alt, Hip-hop, Rock, and more! Our goal is to explore all genres and provide content for every music lover.',
                        }].map((item, index) => (
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
                        <p>If you have any additional questions, feel free to reach out to us by filling out the form below:</p>

                        <form id="contact-form" method="POST" onSubmit={handleSubmit}>
                            <input type="hidden" name="access_key" value="d3daf39e-2e61-45b3-8c67-e5382cea88da" />

                            <div>
                                <label htmlFor="name">Name:</label>
                                <input id="name" type="text" placeholder="First and last" name="name" required />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input id="email" type="email" name="email" required />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>

                            <div>
                                <button type="submit">Submit Form</button>
                            </div>
                        </form>
                        <div id="result">{formResult}</div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default AboutUs;
