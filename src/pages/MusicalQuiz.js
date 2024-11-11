import React, { useState } from 'react';
import '../css/MusicalQuiz.css'; 

const MusicalQuiz = () => {
    const [responses, setResponses] = useState({
        vibe: '',
        music: '',
        collab: '',
        theme: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setResponses(prevResponses => ({
            ...prevResponses,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Responses submitted:', responses);
        alert('Your responses have been submitted!');
    };

    return (
        <>
        
            <main>
                <h1 className="centered-heading">Musical Quiz</h1>
                <div className="quiz-content">
                    <h2>What artist are you most like?</h2>
                    <p>Answer questions below to find out</p>

                    <form onSubmit={handleSubmit}>
                        <div className="question">
                            <h3>What kind of vibe do you prefer when hanging out?</h3>
                            <ul>
                                <li>
                                    <input type="radio" id="vibe1" name="vibe" value="chill" onChange={handleChange} />
                                    <label htmlFor="vibe1">Chill night with a few friends.</label>
                                </li>
                                <li>
                                    <input type="radio" id="vibe2" name="vibe" value="parties" onChange={handleChange} />
                                    <label htmlFor="vibe2">Big parties and social events</label>
                                </li>
                                <li>
                                    <input type="radio" id="vibe3" name="vibe" value="adventures" onChange={handleChange} />
                                    <label htmlFor="vibe3">Exploring new experiences and adventures</label>
                                </li>
                                <li>
                                    <input type="radio" id="vibe4" name="vibe" value="quiet" onChange={handleChange} />
                                    <label htmlFor="vibe4">Quiet evenings alone.</label>
                                </li>
                            </ul>
                        </div>

                        <div className="question">
                            <h3>What role does music play in your life?</h3>
                            <ul>
                                <li>
                                    <input type="radio" id="music1" name="music" value="reason" onChange={handleChange} />
                                    <label htmlFor="music1">It's the only reason I live.</label>
                                </li>
                                <li>
                                    <input type="radio" id="music2" name="music" value="no_care" onChange={handleChange} />
                                    <label htmlFor="music2">I don't care for it.</label>
                                </li>
                                <li>
                                    <input type="radio" id="music3" name="music" value="cope" onChange={handleChange} />
                                    <label htmlFor="music3">It helps me cope with my feelings.</label>
                                </li>
                                <li>
                                    <input type="radio" id="music4" name="music" value="sometimes" onChange={handleChange} />
                                    <label htmlFor="music4">I listen to it sometimes.</label>
                                </li>
                            </ul>
                        </div>

                        <div className="question">
                            <h3>How do you feel about collabs in music?</h3>
                            <ul>
                                <li>
                                    <input type="radio" id="collab1" name="collab" value="hate" onChange={handleChange} />
                                    <label htmlFor="collab1">I hate it.</label>
                                </li>
                                <li>
                                    <input type="radio" id="collab2" name="collab" value="love" onChange={handleChange} />
                                    <label htmlFor="collab2">I love it.</label>
                                </li>
                                <li>
                                    <input type="radio" id="collab3" name="collab" value="like" onChange={handleChange} />
                                    <label htmlFor="collab3">I like it if it sounds good.</label>
                                </li>
                                <li>
                                    <input type="radio" id="collab4" name="collab" value="dont_mind" onChange={handleChange} />
                                    <label htmlFor="collab4">I don't mind.</label>
                                </li>
                            </ul>
                        </div>

                        <div className="question">
                            <h3>What themes are most like you?</h3>
                            <ul>
                                <li>
                                    <input type="radio" id="theme1" name="theme" value="nostalgic" onChange={handleChange} />
                                    <label htmlFor="theme1">Nostalgic romance and heartbreak</label>
                                </li>
                                <li>
                                    <input type="radio" id="theme2" name="theme" value="emotional" onChange={handleChange} />
                                    <label htmlFor="theme2">Emotional depth and intimacy</label>
                                </li>
                                <li>
                                    <input type="radio" id="theme3" name="theme" value="hustle" onChange={handleChange} />
                                    <label htmlFor="theme3">Hustle and ambition</label>
                                </li>
                                <li>
                                    <input type="radio" id="theme4" name="theme" value="rebellion" onChange={handleChange} />
                                    <label htmlFor="theme4">Rebellion</label>
                                </li>
                            </ul>
                        </div>

                        <div className="quiz-submit">
                            <button type="submit" id="submitBtn">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default MusicalQuiz;
