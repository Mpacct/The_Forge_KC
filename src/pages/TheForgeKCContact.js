import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

function TheForgeKCContact() {
  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yott8h7', 'contact_form', form.current, {
        publicKey: 'ZoSI5-kvJY3ik87Eq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          navigate('/');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
<form ref={form} onSubmit={sendEmail} className="text-center border border-light p-5" action="#!">

<p className="h4 mb-4">Contact us</p>

<input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" name="from_name" />

<input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" name="reply_to"/>

<label>Subject</label>
<select className="browser-default custom-select mb-4" name="contact_type">
    <option value="" selected>Choose option</option>
    <option value="Feedback" >Feedback</option>
    <option value="PrivateEvent">Private Event</option>
</select>

<div className="form-group">
    <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message" name="message"></textarea>
</div>


<button className="btn btn-info btn-block" type="submit">Send</button>

</form>
  );
};
export default TheForgeKCContact;