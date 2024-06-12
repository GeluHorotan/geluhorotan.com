import { directus } from '@lib/directus';

const GET_PROJECTS_QUERY = `query {project(
  sort: ["-date_created"]
)  { name,id, body, contributors {role, contributor_id {name}} technologies {technology_id {name, identifier}}}}`;

export async function getProjects() {
  try {
    const res = await directus.query<any>(GET_PROJECTS_QUERY);
    const { project } = res;
    return project;
  } catch (error) {
    console.log(error, 'err');
  }
}
