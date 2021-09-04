import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, Button, Icon } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const SERVICE_ID = "service_s9ofxys";
const TEMPLATE_ID = "template_4s92d5a";
const USER_ID = "user_QzD5No57f2JCp8waEvgvZ";

const SuscriptionForm = () => {
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
        <div className="SuscriptionForm">
        <Form onSubmit={handleOnSubmit}>
              <Form.Field
              id='form-input-control-name-sus'
              className="col-md-6"
              control={Input}
              name='user_name'
              placeholder='Full Name*'
              icon='user circle outline'
              iconPosition='left'
              required
              />
              <Form.Field
              id='form-input-control-email-sus'
              className="col-md-6"
              control={Input}
              name='user_email'
              placeholder='Email*'
              icon='mail outline'
              iconPosition='left'
              required
              />
              <Button type='submit' color='green'><Icon name='send' />Suscribe!</Button>
        </Form>
      </div>
    )
}

export default SuscriptionForm;
