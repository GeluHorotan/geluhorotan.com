// Form
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';
// Icons
import { MdAddAPhoto } from 'react-icons/md';
import * as Yup from 'yup';

import { useAuth } from '@//context/hooks/useAuth';
import Button from '@/components/Button';
import ModalWrapper from '@/components/ModalWrapper';
import useButtonCooldown from '@/context/hooks/useButtonCooldown';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../Tooltip';
import Checkbox from './Checkbox';
import Input from './Input';
import InputCropImage from './InputCropImage';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(3, 'Please enter more than 3 characters!')
    .max(20, `Please enter less than 10 characters!`)
    .required('This field is required!'),
  lastName: Yup.string()
    .trim()
    .min(3, 'Please enter more than 3 characters!')
    .max(20, `Please enter less than 10 characters!`)
    .required('This field is required!'),
  email: Yup.string()
    .trim()
    .email('Please enter a valid email!')
    .required('This field is required!'),
  password: Yup.string()
    .trim()
    .required('This field is required!')
    .min(6, 'Please enter more than 6 characters!')
    .max(24, 'Please enter less than 24 characters!'),
  password2: Yup.string()
    .trim()
    .required('Password confirmation is required')
    .when('password', {
      is: (value: string) => value && value.length > 0,
      then: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
    }),
  termsAndConditions: Yup.boolean().oneOf([true], 'This field is required!'),
  profilePicture: Yup.mixed()
    .required('This field is required!')
    .test(
      'imageFormat',
      `Invalid image format. Please select a supported format!`,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      (value) => {
        if (typeof value === 'string') {
          const mimeType = value.split(',')[0].split(':')[1].split(';')[0];
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(mimeType);
        }
        if (typeof value === 'object') {
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
        }
      }
    )
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: Unreachable code error
    .test('imageSize', 'Image is too large', (value) => {
      if (typeof value === 'string') {
        const imageData = Buffer.from(value, 'base64');

        const size = imageData.length / 1000;

        return size <= 2 * 1024; // 2 MB
      }
      if (typeof value === 'object') {
        const size = value.size / 1000;
        return size <= 2 * 1024; // @M
      }
    }),
});

const RegisterForm = () => {
  const [isButtonDisabled, handleClick] = useButtonCooldown(3000);
  const { register } = useAuth();
  const [passVisible, setPassVisible] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);

  const onChangeHandler = () => {
    setPassVisible((prevState) => !prevState);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <Formik
          validateOnBlur
          validateOnChange
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: '',
            profilePicture: '',
            termsAndConditions: false,
          }}
          validationSchema={SignupSchema}
          onSubmit={async ({
            firstName,
            lastName,
            email,
            password,
            password2,
            profilePicture,
            termsAndConditions,
          }) => {
            if (password === password2) {
              handleClick();
              await register({
                firstName,
                lastName,
                email,
                password,
                profilePicture,
                termsAndConditions,
              });
            }
          }}
        >
          {({
            values: {
              firstName,
              lastName,
              email,
              password,
              password2,
              profilePicture,
              termsAndConditions,
            },
            setFieldValue,
            setStatus,
            errors,
            handleBlur,
            handleChange,
          }) => (
            <Form
              className={
                'flex w-full  flex-col  justify-end gap-40    py-4 text-primary'
              }
            >
              <div className="flex flex-col justify-center gap-8">
                <div className="relative flex  w-max flex-col-reverse items-start justify-center gap-1  rounded-full   text-secondary">
                  <div className="flex items-center justify-center gap-2">
                    {croppedImage && (
                      <Image
                        src={croppedImage}
                        alt="Profile Picture"
                        width={64}
                        height={64}
                        className={`rounded-full `}
                      />
                    )}
                    <Button
                      type="button"
                      className={`${
                        croppedImage ? 'show' : 'hidden'
                      }  text-secondary`}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <BsPencilSquare
                        size={32}
                        className="rounded-md bg-primary  p-1"
                      />
                    </Button>
                  </div>

                  <Button
                    type="button"
                    className={` h-16 w-16 rounded-full bg-primary_t  text-secondary ${
                      !croppedImage ? 'show' : 'hidden'
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <MdAddAPhoto size={16} />
                    <ModalWrapper
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      title="Select an Image"
                    >
                      <Field
                        setFieldValue={setFieldValue}
                        label="Profile picture"
                        id="profilePicture"
                        name="profilePicture"
                        onBlurHandler={handleBlur}
                        inputType="file"
                        value={profilePicture}
                        error={errors.profilePicture}
                        as={InputCropImage}
                        croppedImage={croppedImage}
                        setCroppedImage={setCroppedImage}
                        setIsOpen={setIsOpen}
                        setStatus={setStatus}
                      />
                    </ModalWrapper>
                  </Button>
                  <div className="flex items-center gap-0.5">
                    {errors.profilePicture && (
                      <TooltipTrigger className="flex ">
                        <BiErrorCircle
                          className={`${
                            errors.profilePicture ? 'text-error' : ''
                          }`}
                          size={16}
                        />
                      </TooltipTrigger>
                    )}{' '}
                    {errors.profilePicture && (
                      <TooltipContent className="bg-primary text-secondary">
                        <p>{errors.profilePicture}</p>
                      </TooltipContent>
                    )}
                    <span
                      className={`${
                        errors.profilePicture ? 'text-error' : ''
                      } text-primary dark:text-secondary`}
                    >
                      Profile picture *
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 space-x-1 max-[960px]:grid-cols-1 max-[960px]:gap-8 max-[960px]:space-x-0">
                  <Field
                    label="First name"
                    id="firstName"
                    name="firstName"
                    onChangeHandler={handleChange}
                    onBlurHandler={handleBlur}
                    inputType="text"
                    value={firstName}
                    error={errors.firstName}
                    as={Input}
                    isRequired
                  />

                  <Field
                    label="Last name"
                    id="lastName"
                    name="lastName"
                    onChangeHandler={handleChange}
                    onBlurHandler={handleBlur}
                    inputType="text"
                    value={lastName}
                    error={errors.lastName}
                    as={Input}
                    isRequired
                  />
                </div>
                <Field
                  label="Email "
                  id="email"
                  name="email"
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                  inputType="text"
                  value={email}
                  error={errors.email}
                  as={Input}
                  isRequired
                />
                <div className="grid grid-cols-2 space-x-1 max-[960px]:grid-cols-1 max-[960px]:gap-8 max-[960px]:space-x-0">
                  <Field
                    label="Password"
                    id="password"
                    name="password"
                    onChangeHandler={handleChange}
                    onBlurHandler={handleBlur}
                    inputType={passVisible ? 'text' : 'password'}
                    value={password}
                    error={errors.password}
                    as={Input}
                    isRequired
                  />
                  <Field
                    label="Check password"
                    id="password2"
                    name="password2"
                    onChangeHandler={handleChange}
                    onBlurHandler={handleBlur}
                    inputType={passVisible ? 'text' : 'password'}
                    value={password2}
                    error={errors.password2}
                    as={Input}
                    isRequired
                  />
                </div>
                <Checkbox
                  onChangeHandler={onChangeHandler}
                  label={'Show password'}
                  id="showPass"
                  name="showPass"
                  type="checkbox"
                />
                <Field
                  label={
                    <div>
                      I agree to the&nbsp;
                      <Link
                        href="/terms-and-conditions"
                        className="text-accent dark:text-accent2"
                      >
                        terms and conditions
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="/privacy-policy"
                        className="text-accent dark:text-accent2"
                      >
                        privacy policy
                      </Link>
                      . *
                    </div>
                  }
                  id="termsAndConditions"
                  name="termsAndConditions"
                  onChangeHandler={handleChange}
                  onBlurHandler={handleBlur}
                  type="checkbox"
                  value={termsAndConditions}
                  error={errors.termsAndConditions}
                  labelColor={'dark:text-secondary text-primary'}
                  as={Checkbox}
                  isRequired
                />
                <Button
                  type="submit"
                  className=" mb-4 w-max rounded-lg border-2  border-accent  px-6 py-2 font-bold   uppercase transition-all duration-75 ease-in-out  disabled:!border-secondary_s_2 disabled:!text-secondary_s_2  dark:border-accent2 "
                  rounded
                  disabled={isButtonDisabled}
                >
                  REGISTER
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RegisterForm;
