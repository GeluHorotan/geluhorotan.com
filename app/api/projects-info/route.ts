import { IProjects } from '@customTypes/ProjectInterfaces';
import { GET_PROJECTS_INFO_QUERY } from '@data/queries';
import { directus } from '@lib/directus';

export async function GET() {
  try {
    const res = await directus.query<IProjects>(GET_PROJECTS_INFO_QUERY);
    const { project } = res;

    return Response.json({ project }, { status: 200 });
  } catch (error) {
    return Response.json({ error });
  }
}
