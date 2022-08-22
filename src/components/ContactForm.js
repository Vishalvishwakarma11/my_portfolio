import styled from 'styled-components';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    color: #fff;
  }
`;

export default function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_kd6n0zc',
        'template_oknjbr3',
        form.current,
        'Q1FxrVGyufyTyRsZ7'
      )
      .then(
        (result) => {
          alert('Your message has been send!');
        },
        (error) => {
          alert('Please try again');
        }
      );
    e.target.reset();
  };

  return (
    <>
      <FormStyle ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">
            Your Name
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your Email
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              autoComplete="off"
              required
            />
          </label>
        </div>
        <button type="submit" value="send messege">
          Send
        </button>
      </FormStyle>
    </>
  );
}
