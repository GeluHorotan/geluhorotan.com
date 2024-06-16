export interface ITechnology {
  id: string;
  name: string;
  technology_id?: { id: string; name: string };
}

export interface IContributor {
  id: string;
  name: string;
  role: string;
  contributor_id?: { id: string; name: string };
}

export interface IProject {
  stage: string;
  image: { id: string };
  name: string;
  id: string;
  description: string;
  technologies: ITechnology[];
  contributors: IContributor[];
  url: string;
  slug: string;
}

export interface IProjects {
  project: IProject[];
}
