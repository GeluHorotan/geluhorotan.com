export const GET_PROJECTS_QUERY = `query {project(
  sort: ["-date_created"]
)  { name,id, body, contributors {role, contributor_id {name}} technologies {technology_id {name, identifier}}}}`;
