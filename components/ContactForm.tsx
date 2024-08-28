'use client';

// API
import { sendMessage } from '@data/sendMessage';

// UI
import { Input } from '@components/ui/Input';
import { Textarea } from '@components/ui/Textarea';
import { Button } from '@components/ui/Button';

// Formik and Yup
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// Components
import { Checkbox } from '@components/ui/Checkbox';
import { LegalWrapper } from '@components/LegalWrapper';
import { PrivacyPolicy } from '@components/PrivacyPolicy';

import contact_form_locale from '@locale/en/contact_form_locale.json';

export function ContactForm() {
  const { button, useOfDataConsentText } = contact_form_locale;

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
    useOfDataConsent: Yup.boolean().oneOf([true], 'This field is required!'),
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
        useOfDataConsent: false,
      }}
      onSubmit={async (
        { full_name, email, phone, subject, message, useOfDataConsent },
        { resetForm }
      ) => {
        await sendMessage({
          full_name,
          email,
          phone,
          subject,
          message,
          useOfDataConsent,
        });
        resetForm();
      }}
    >
      {({
        values: { full_name, email, phone, subject, message, useOfDataConsent },
        values,
        errors,
        handleBlur,
        handleChange,
        setFieldValue,
      }) => (
        <Form className="w-1/2 max-[1050px]:w-full flex flex-col items-start gap-4">
          <Field
            label="Full name"
            placeholder="John Doe"
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
          {console.log(values)}
          <Field
            label="Email"
            placeholder="john.doe@gmail.com"
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
            placeholder="Your thoughts here."
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
            label="useOfDataConsent"
            required
            id="useOfDataConsent"
            name="useOfDataConsent"
            setFieldValue={setFieldValue}
            value={useOfDataConsent}
            error={errors.useOfDataConsent}
            as={Checkbox}
          >
            {useOfDataConsentText}&nbsp;
            <LegalWrapper title="Privacy Policy" trigger="privacy policy.">
              <PrivacyPolicy />
            </LegalWrapper>
          </Field>

          <Button className="w-full" type="submit">
            {button?.text}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
