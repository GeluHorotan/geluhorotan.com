/* eslint-disable react/no-unescaped-entities */

export function PrivacyPolicy() {
  return (
    <div className="flex flex-col gap-8 ">
      <p>
        This Privacy Policy describes how geluhorotan.com ("we," "us," or "our")
        collects, uses, and shares personal information when you visit
        geluhorotan.com (the "Site"). By accessing or using the Site, you agree
        to the terms of this Privacy Policy.
      </p>

      <div className="flex flex-col gap-4">
        <h5>Information We Collect</h5>

        <p>
          When you use our contact form on geluhorotan.com, we may collect
          personal information such as your name and email address. This
          information is voluntarily provided by you for the purpose of
          contacting you in response to your inquiry. By submitting the contact
          form, you consent to us using this information to respond to your
          request.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h5>Profile Information</h5>

        <p>
          If you choose to register on our website and create an account, we may
          collect additional personal information such as your first name, last
          name, and profile picture. This information is used to personalize
          your experience on the Site and may be displayed on your profile.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h5>Use of Personal Information</h5>
        <p>
          We may use the personal information we collect for the following
          purposes:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-2">
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
      </div>
      <div className="flex flex-col gap-4">
        <h5>Sharing of Personal Information</h5>

        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except in the following
          circumstances:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-2">
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
      </div>
      <div className="flex flex-col gap-4">
        <h5>Security</h5>

        <p>
          We take reasonable measures to protect the security of your personal
          information. However, please be aware that no method of transmission
          over the internet or electronic storage is completely secure, and we
          cannot guarantee the absolute security of your information.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h5>Updates to this Privacy Policy</h5>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be effective immediately upon posting of the updated Privacy Policy on
          the Site. We encourage you to review this Privacy Policy periodically
          for any updates.
        </p>
      </div>
    </div>
  );
}
