import React from "react";

export default function ContactButtons() {
    return (
        <>
            <div className='contact-buttons'>
                <a href="#"><button id='email_button'><i className="fa-regular fa-envelope"></i>
                    Email
                </button></a>
                <a href='https://www.linkedin.com/in/adam-halnon-555649252/'><button id='linkedin_button'><i className="fa-brands fa-linkedin"></i>
                    LinkedIn
                </button></a>
            </div>
        </>
    )
}