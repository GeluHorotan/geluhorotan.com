'use client';
import { sendMessage } from '@data/sendMessage';
import { Input } from './ui/Input';
import { Textarea } from './ui/Textarea';
import { Button } from './ui/Button';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export function ContactForm() {
  const sendMessageSchema = Yup.object().shape({
    full_name: Yup.string().trim().min(5, 'Please enter more characters.'),
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
        message: '',
        subject: '',
      }}
      onSubmit={async (
        { full_name, email, phone, message, subject },
        { resetForm }
      ) => {
        console.log('TEST');
        resetForm();
      }}
    >
      {({
        values: { full_name, email, phone, message, subject },
        errors,
        handleBlur,
        handleChange,
      }) => (
        <Form className="w-1/2 flex flex-col items-start gap-4">
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
            errorMessage={errors.full_name}
            as={Input}
          />

          <Button className="w-full" type="submit">
            Send message
          </Button>
        </Form>
      )}
    </Formik>
  );
}
