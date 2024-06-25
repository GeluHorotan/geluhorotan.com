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
  create_message_item(data: {full_name: ${JSON.stringify(full_name)}, email: ${JSON.stringify(email)} , phone: ${JSON.stringify(phone)} ,  subject: ${JSON.stringify(subject)}, message: ${JSON.stringify(message)} }) {
    full_name,
    email,
    phone,
    message,
    subject
  }
}
`;
};
