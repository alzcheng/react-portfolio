import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  return (
    <div className="card card-contact-info">
      <div className="card-body">
        <h5 className="card-title contact-title">Contact Info</h5>
        <hr className="my-1"></hr>
        <ul className="list-group list-group-vertical-xl">
          <li className="list-group-item"><span className="contact-labels">Name: </span> Albert Zi
                        Wen Cheng</li>
          <li className="list-group-item"><span className="contact-labels">Email: </span>
                albertzcheng@gmail.com</li>
          <li className="list-group-item"><span className="contact-labels">Phone: </span>
                415-515-2973</li>
          <li className="list-group-item"><span className="contact-labels">LinkedIn: </span><a
            href="https://www.linkedin.com/in/albertzcheng/">linkedin.com/in/albertzcheng/</a>
          </li>
          {/* <li className="list-group-item"><span className="contact-labels">Github:</span>
            <a
              href="https://drive.google.com/file/d/1fMsUjURazLCXbGe4fyiDScR0_-5xGUHo/view?usp=sharing">Click
                            Here</a>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default ContactMe
