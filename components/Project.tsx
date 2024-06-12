export interface IProject {
  name: string;
}
export function Project({ name }: IProject) {
  return <div>{name}</div>;
}
