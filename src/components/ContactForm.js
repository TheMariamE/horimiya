import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_s9ofxys";
const TEMPLATE_ID = "template_4s92d5a";
const USER_ID = "user_QzD5No57f2JCp8waEvgvZ";

const ContactForm = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };

return (
    <div className="ContactForm">
      <Form onSubmit={handleOnSubmit}>
        <div className="row">
            <Form.Field
            id='form-input-control-name'
            className="col-md-6"
            control={Input}
            label='Full Name'
            name='user_name'
            placeholder='Name…'
            required
            />
            <Form.Field
            id='form-input-control-email'
            className="col-md-6"
            control={Input}
            label='Email'
            name='user_email'
            placeholder='Email…'
            required
            />
            <Form.Field
            id='form-input-control-phone'
            className="col-md-6"
            control={Input}
            label='Phone Number'
            name='user_phone'
            placeholder=''
            required
            />
            <Form.Field
            id='form-input-control-country'
            className="col-md-6"
            control={Input}
            label='Country'
            name='user_country'
            placeholder=''
            required
            />
            <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Message'
            name='user_message'
            placeholder='Message…'
            required
            />
            <Button type='submit' color='green'>Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
