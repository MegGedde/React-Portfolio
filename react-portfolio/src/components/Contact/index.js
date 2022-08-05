import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    function handleChange(e) {
        if (e.target.name === 'email') {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                }
              }
        
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value });
    }
}
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <div>
            <h1>Contact Me</h1>
            <h2>Share your information with me and I will reach back out to you.</h2>
            <form id="contact-form" onSubmit={handleSubmit} className="contact-form">
            <div className='form-container'>
                <label htmlFor="name">Name:</label>
                <input className="form-input" type="text" defaultValue={name} name="name" onBlur={handleChange}/>
            </div>
            <div className='form-container'>
                <label htmlFor="email">Email address:</label>
                <input className="form-input" type="email" defaultValue={email} name="email" onBlur={handleChange}/>
            </div>
            <div className='form-container'>
                <label htmlFor="message">Message:</label>
                <textarea className="form-input" name="message" defaultValue={message} rows="5"  onBlur={handleChange}/>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
            <button id="button" type="submit">Submit</button>
        </form>
        </div>
    )
            }

export default Contact;