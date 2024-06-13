import { directus } from '@lib/directus';
import { GET_PROJECTS_QUERY } from '@api/queries';

export async function getProjects() {
  try {
    const res = await directus.query<any>(GET_PROJECTS_QUERY);
    const { project } = res;
    return project;
  } catch (error) {
    console.log(error, 'err');
  }
}
