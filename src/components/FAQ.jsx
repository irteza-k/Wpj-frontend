// src/components/FAQ.jsx

import React, { useState } from 'react';
import '../styles/FAQ.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is CDAC Connect?",
      answer: "CDAC Connect is a mentorship platform that allows current CDAC students to connect with alumni working in top companies for one-on-one guidance and career support."
    },
    {
      question: "How do I book a session with an alumni expert?",
      answer: "When you sign up and select an expert, the session is booked as per the mentor's available time slots. You can choose the timing that fits your and the expert's schedule."
    },
    {
      question: "Is there any cost involved in booking a session?",
      answer: "Zero - 0"
    },
    {
      question: "Can I reschedule or cancel a session?",
      answer: "Yes, you can manage your sessions from your dashboard. Rescheduling and cancellation depend on the expert’s policies, which are shown during booking."
    },
    {
      question: "Who can use CDAC Connect?",
      answer: "Current CDAC students seeking guidance and CDAC alumni willing to mentor students can use the platform."
    },
    {
      question: "How do I become an expert on CDAC Connect?",
      answer: "If you're a CDAC alumnus working in the industry, you can sign up as a mentor. Fill out your profile and set your availability to start mentoring students."
    },
    {
      question: "Is CDAC Connect affiliated with CDAC Institute?",
      answer: "No, CDAC Connect is an independent platform built by CDAC enthusiasts to support student-alumni mentoring. It is not officially affiliated with CDAC."
    },
    {
      question: "What kind of help can I expect from alumni?",
      answer: "You can get help with interview preparation, resume reviews, project guidance, career advice, and insights into industry roles and expectations."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <span className="toggle-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;