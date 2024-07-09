import { IProject } from '@customTypes/Project';

export async function getProjects() {
  try {
    const res = await fetch('http://localhost:3000/api/project', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();
    const { project } = json;
    return project as IProject[];
  } catch (error) {
    console.log(error);
  }
}
