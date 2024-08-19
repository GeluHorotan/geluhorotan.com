import { IQueryParams } from '@customTypes/ApiInterfaces';
import {
  IContributor,
  IProject,
  ITechnology,
} from '@customTypes/ProjectInterfaces';
import { GET_PROJECT_QUERY } from '@data/queries';
import { directus } from '@lib/directus';

export async function GET(req: any, { params }: { params: IQueryParams }) {
  const { projectSlug } = params;

  try {
    const res = await directus.query<any>(GET_PROJECT_QUERY({ projectSlug }));
    const { project } = res;

    project.forEach((projectEntry: IProject) => {
      projectEntry.technologies.forEach((item: ITechnology) => {
        (item as ITechnology).id = item.technology_id!.id;
        (item as ITechnology).name = item.technology_id!.name;
        (item as ITechnology).identifier = item.technology_id!.identifier;
        delete (item as ITechnology).technology_id;
      });

      projectEntry.contributors.forEach((item: IContributor) => {
        (item as IContributor).id = item.contributor_id!.id;
        (item as IContributor).name = item.contributor_id!.name;
        (item as IContributor).avatar = item.contributor_id!.avatar.id;

        delete (item as IContributor).contributor_id;
      });
    });

    return Response.json({ project }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ error });
  }
}
