import { directus } from '@lib/directus';
import { GET_PROJECTS_QUERY } from '@data/queries';
import {
  IContributor,
  IProject,
  IProjects,
  ITechnology,
} from '@customTypes/Project';

export async function getProjects() {
  try {
    const res = await directus.query<IProjects>(GET_PROJECTS_QUERY);
    const { project } = res;

    project.forEach((project: IProject) => {
      project.technologies.forEach((item: ITechnology) => {
        (item as ITechnology).id = item.technology_id!.id;
        (item as ITechnology).name = item.technology_id!.name;
        delete (item as ITechnology).technology_id;
      });

      project.contributors.forEach((item: IContributor) => {
        (item as IContributor).id = item.contributor_id!.id;
        (item as IContributor).name = item.contributor_id!.name;
        delete (item as IContributor).contributor_id;
      });
    });

    return project as IProject[];
  } catch (error) {
    console.log(error, 'err');
  }
}
