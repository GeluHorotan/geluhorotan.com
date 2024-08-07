import { IContactFormParams } from '@customTypes/IContactFormParams';

export const GET_PROJECTS_QUERY = `
  query {
    project(sort: ["-date_created"]) {
      stage
      image {
        id
      }
      name
      id
      description
      technologies {
        technology_id {
          id
          name
          identifier
        }
      }
      contributors {
        role
        contributor_id {
          id
          name
          avatar {id}
        }
      }
      url
      slug

    }
  }
`;

export const SUBMIT_CONTACT_FORM_QUERY = ({
  full_name,
  email,
  phone,
  message,
  subject,
}: IContactFormParams) => {
  return `
    mutation {
      create_message_item(data: { full_name: "${full_name}", email: "${email}", phone: "${phone}", subject: "${subject}", message: "${message}" }) {
        full_name
        email
        phone
        subject
        message
      }
    }
  `;
};
