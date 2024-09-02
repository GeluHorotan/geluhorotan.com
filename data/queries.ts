import { IContactFormParams } from '@customTypes/ContactFormInterfaces';

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

export const GET_PROJECT_QUERY = ({ projectSlug }: { projectSlug: string }) => {
  return `
  query {
    project(filter: { slug: { _eq: ${JSON.stringify(projectSlug)} } }) {
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
      body
    }
  }
`;
};

export const SUBMIT_CONTACT_FORM_QUERY = ({
  full_name,
  email,
  phone,
  message,
  subject,
  useOfDataConsent,
}: IContactFormParams) => {
  return `
    mutation {
      create_message_item(data: { full_name: "${full_name}", email: "${email}", phone: "${phone}", subject: "${subject}", message: "${message}", useOfDataConsent: ${useOfDataConsent} }) {
        full_name
        email
        phone
        subject
        message
      }
    }
  `;
};

export const GET_PROJECTS_INFO_QUERY = `
  query {
    project(sort: ["-date_created"]) {
      name
      description
      slug
    }
  }
`;
