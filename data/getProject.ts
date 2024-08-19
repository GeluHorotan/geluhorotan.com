import { IQueryParams } from '@customTypes/ApiInterfaces';
import { IProject } from '@customTypes/ProjectInterfaces';

export async function getProject({ projectSlug }: IQueryParams) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/project/${projectSlug}`,
      {
        method: 'GET',
        cache: 'no-cache',
      }
    );
    const json = await res.json();
    const { project } = json;
    return project as IProject[];
  } catch (error) {
    console.log(error);
  }
}
