/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { TextTemplate } from '@/templates/TextTemplate';

type Props = {
  children?: React.ReactNode;
};

const PrivacyPolicy: NextPage<Props> = () => {
  return (
    <TextTemplate
      pageTitle="Privacy Policy"
      headerPadding
      bodyPadding
      bottomBodyPadding
      meta={
        <Meta
          title="Gelu Horotan - Privacy Policy"
          description={`Your privacy is my top priority! My privacy policy page is where we unveil my commitment to safeguarding your personal information. Rest assured that your data is handled with the utmost care and in accordance with industry standards. Explore my privacy policy to learn how I protect your digital footprint. Your peace of mind is our mission.`}
        />
      }
    >
      <div className="flex flex-col gap-8">
        <p>
          This Privacy Policy describes how geluhorotan.com ("we," "us," or
          "our") collects, uses, and shares personal information when you visit
          geluhorotan.com (the "Site"). By accessing or using the Site, you
          agree to the terms of this Privacy Policy.
        </p>

        <h3>
          <strong>Information We Collect</strong>
        </h3>

        <p>
          When you use our contact form on geluhorotan.com, we may collect
          personal information such as your name and email address. This
          information is voluntarily provided by you for the purpose of
          contacting you in response to your inquiry. By submitting the contact
          form, you consent to us using this information to respond to your
          request.
        </p>

        <h3>
          <strong>Profile Information</strong>
        </h3>

        <p>
          If you choose to register on our website and create an account, we may
          collect additional personal information such as your first name, last
          name, and profile picture. This information is used to personalize
          your experience on the Site and may be displayed on your profile.
        </p>

        <h3>
          <strong>Use of Personal Information</strong>
        </h3>
        <p>
          We may use the personal information we collect for the following
          purposes:
        </p>
        <ul>
          <li>
            To respond to your inquiries or contact you regarding your message
            sent through the contact form;
          </li>
          <li>
            To provide you with access to certain features and functionalities
            of the Site, including personalized profile information.;
          </li>
          <li>
            To communicate with you about updates, news, and promotional offers
            related to GeluHorotan.com, if you have opted to receive such
            communications;
          </li>
          <li>To improve the Site and enhance user experience.</li>
        </ul>

        <h3>
          <strong>Sharing of Personal Information</strong>
        </h3>

        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except in the following
          circumstances:
        </p>
        <ul>
          <li>
            We may share your personal information with trusted service
            providers who assist us in operating the Site and providing services
            to you. These service providers are obligated to handle your
            personal information in a secure and confidential manner;
          </li>
          <li>
            We may disclose personal information if required by law or to
            protect our rights, property, or safety, or the rights, property, or
            safety of others.
          </li>
        </ul>

        <h3>
          <strong>Security</strong>
        </h3>

        <p>
          We take reasonable measures to protect the security of your personal
          information. However, please be aware that no method of transmission
          over the internet or electronic storage is completely secure, and we
          cannot guarantee the absolute security of your information.
        </p>

        <h3>
          <strong>Updates to this Privacy Policy</strong>
        </h3>

        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be effective immediately upon posting of the updated Privacy Policy on
          the Site. We encourage you to review this Privacy Policy periodically
          for any updates.
        </p>
      </div>
    </TextTemplate>
  );
};

export default PrivacyPolicy;
