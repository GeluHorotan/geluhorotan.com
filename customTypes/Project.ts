export interface ITechnology {
  id: string;
  name: string;
  identifier: string;
  technology_id?: { id: string; name: string; identifier: string };
}

export interface IContributor {
  avatar: any;
  id: string;
  name: string;
  role: string;
  contributor_id?: {
    avatar: { id: string };
    id: string;
    name: string;
  };
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
