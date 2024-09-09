import { IQueryParams } from '@customTypes/ApiInterfaces';
import { IProject } from '@customTypes/ProjectInterfaces';

export async function getProject({ projectSlug }: IQueryParams) {
  try {
    const res = await fetch(
      `${process.env.API_URL2}/api/project/${projectSlug}`,
      {
        method: 'GET',
        cache: 'default',
      }
    );
    const json = await res.json();
    const { project } = json;
    return project as IProject;
  } catch (error) {
    console.log(error);
  }
}
