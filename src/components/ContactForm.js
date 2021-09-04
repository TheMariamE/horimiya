import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react';
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
      const episodeOptions = [
        { key: 'ep1', value: 'ep1', text: 'Episode 1 - A Tiny Happenstance' },
        { key: 'ep2', value: 'ep2', text: 'Episode 2 - You Wear More Than One Face' },
        { key: 'ep3', value: 'ep3', text: "Episode 3 - That's Why It's Okay" },
        { key: 'ep4', value: 'ep4', text: 'Episode 4 - Everybody Loves Somebody' },
        { key: 'ep5', value: 'ep5', text: "Episode 5 - I Can't Say It Out Loud" },
        { key: 'ep6', value: 'ep6', text: "Episode 6 - This Summer's Going to Be a Hot One" },
        { key: 'ep7', value: 'ep7', text: "Episode 7 - You're Here, I'm Here" },
        { key: 'ep8', value: 'ep8', text: 'Episode 8 - The Truth Deception Reveals' },
        { key: 'ep9', value: 'ep9', text: "Episode 9 - It's Hard, but Not Impossible" },
        { key: 'ep10', value: 'ep10', text: "Episode 10 - Until the Snow Melts" },
        { key: 'ep11', value: 'ep11', text: "Episode 11 - It May Seem Like Hate" },
        { key: 'ep12', value: 'ep12', text: "Episode 12 - Hitherto, and Forevermore" },
        { key: 'ep13', value: 'ep13', text: "Episode 13 - I Would Gift You the Sky" },

      ]

return (
    <div className="ContactForm">
      <Form onSubmit={handleOnSubmit}>
        <div className="row">
            <Form.Field
            id='form-input-control-name'
            className="col-md-6"
            control={Input}
            name='user_name'
            placeholder='Full Name*'
            required
            />
            <Form.Field
            id='form-input-control-email'
            className="col-md-6"
            control={Input}
            name='user_email'
            placeholder='Email*'
            required
            />
            <Form.Field
            id='form-input-control-phone'
            className="col-md-6"
            control={Input}
            name='user_phone'
            placeholder='Phone Number*'
            required
            />
            <Select 
            id='form-input-control-country' 
            className="col-md-6" 
            options={episodeOptions} 
            name='user_episode'
            placeholder="Select favorite episode" 
            required
             />
            <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            name='user_message'
            placeholder='Message*'
            required
            />
            <Button type='submit' color='green'>Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default ContactForm;
