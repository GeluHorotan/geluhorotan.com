import {
  IContributor,
  IProject,
  IProjects,
  ITechnology,
} from '@customTypes/ProjectInterfaces';
import { GET_PROJECTS_QUERY } from '@data/queries';
import { directus } from '@lib/directus';

export async function GET() {
  try {
    const res = await directus.query<IProjects>(GET_PROJECTS_QUERY);
    const { project } = res;

    project.forEach((project: IProject) => {
      project.technologies.forEach((item: ITechnology) => {
        (item as ITechnology).id = item.technology_id!.id;
        (item as ITechnology).name = item.technology_id!.name;
        (item as ITechnology).identifier = item.technology_id!.identifier;
        delete (item as ITechnology).technology_id;
      });

      project.contributors.forEach((item: IContributor) => {
        (item as IContributor).id = item.contributor_id!.id;
        (item as IContributor).name = item.contributor_id!.name;
        (item as IContributor).avatar = item.contributor_id!.avatar.id;

        delete (item as IContributor).contributor_id;
      });
    });

    return Response.json({ project }, { status: 200 });
  } catch (error) {
    return Response.json({ error });
  }
}
