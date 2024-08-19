import { IProject } from '@customTypes/ProjectInterfaces';

export async function getProjects() {
  try {
    const res = await fetch('http://localhost:3000/api/projects');
    const json = await res.json();
    const { project } = json;
    return project as IProject[];
  } catch (error) {
    console.log(error);
  }
}
