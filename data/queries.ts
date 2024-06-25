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
