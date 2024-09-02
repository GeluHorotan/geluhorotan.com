import { IProject, IProjects } from '@customTypes/ProjectInterfaces';
import { directus } from '@lib/directus';
import { GET_PROJECTS_INFO_QUERY } from './queries';

export async function getProjectsInfo() {
  try {
    const res = await directus.query<IProjects>(GET_PROJECTS_INFO_QUERY);
    const { project } = res;
    return project as IProject[];
  } catch (error) {
    console.log(error);
  }
}
