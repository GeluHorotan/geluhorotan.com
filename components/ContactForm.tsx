'use client';
import { sendMessage } from '@data/sendMessage';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Button } from './ui/Button';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Checkbox } from './ui/Checkbox';
import { LegalWrapper } from './LegalWrapper';
import { PrivacyPolicy } from './PrivacyPolicy';

export function ContactForm() {
  const sendMessageSchema = Yup.object().shape({
    full_name: Yup.string()
      .required('You must enter a value.')
      .min(5, 'You must enter more than 5 characters.')
      .max(20, 'You must enter less than 20 characters.'),
    email: Yup.string()
      .required('You must enter a value.')
      .email('You must enter a valid email address.'),
    phone: Yup.string()
      .required('You must enter a value.')
      .min(8, 'You must enter more than 8 characters.')
      .max(15, 'You must enter less than 15 characters.'),
    subject: Yup.string()
      .required('You must enter a value.')
      .min(5, 'You must enter more than 5 characters.')
      .max(50, 'You must enter less than 50 characters.'),
    message: Yup.string()
      .required('You must enter a value.')
      .min(10, 'You must enter more than 10 characters.')
      .max(2000, 'You must enter less than 2000 characters.'),
    consent: Yup.boolean().oneOf([true], 'This field is required!'),
  });

  return (
    <Formik
      validateOnBlur
      validateOnChange
      validationSchema={sendMessageSchema}
      initialValues={{
        full_name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false,
      }}
      onSubmit={async (
        { full_name, email, phone, subject, message, consent },
        { resetForm }
      ) => {
        await sendMessage({
          full_name,
          email,
          phone,
          subject,
          message,
          consent,
        });
        resetForm();
      }}
    >
      {({
        values: { full_name, email, phone, subject, message, consent },
        errors,
        handleBlur,
        handleChange,
      }) => (
        <Form className="w-1/2 max-[1050px]:w-full flex flex-col items-start gap-4">
          <Field
            label="Full name"
            placeholder="Gelu Horotan"
            required
            id="full_name"
            name="full_name"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={full_name}
            error={errors.full_name}
            as={Input}
          />
          <Field
            label="Email"
            placeholder="Gelu Horotan"
            required
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={email}
            error={errors.email}
            as={Input}
          />
          <Field
            label="Phone"
            placeholder="0754 678 456"
            required
            id="phone"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={phone}
            error={errors.phone}
            as={Input}
          />
          <Field
            label="Subject"
            placeholder="React.js B2B Collaboration"
            required
            id="subject"
            name="subject"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            value={subject}
            error={errors.subject}
            as={Input}
          />
          <Field
            label="Message"
            placeholder="Gelu Horotan"
            required
            id="message"
            name="message"
            onChange={handleChange}
            onBlur={handleBlur}
            value={message}
            error={errors.message}
            as={Textarea}
          />
          <Field
            label="Consent"
            required
            id="consent"
            name="consent"
            onChange={handleChange}
            onBlur={handleBlur}
            value={consent}
            error={errors.consent}
            as={Checkbox}
          >
            I agree that my personal information provided above may be used to
            contact me regarding this inquiry. For further information, please
            read our&nbsp;
            <LegalWrapper title="Privacy Policy" trigger="privacy policy.">
              <PrivacyPolicy />
            </LegalWrapper>
          </Field>

          <Button className="w-full" type="submit">
            Send message
          </Button>
        </Form>
      )}
    </Formik>
  );
}
