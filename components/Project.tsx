export interface IProject {
  name: string;
  isReversed: boolean;
}

interface IStyles {
  normal: string;
  reversed: string;
}

export function Project({ name, isReversed }: IProject) {
  const activeStyle: keyof IStyles = isReversed ? 'reversed' : 'normal';

  const styles: IStyles = {
    normal: 'self-start',
    reversed: 'self-end',
  };

  return (
    <div className={`bg-red-400 w-full max-w-8xl ${styles[activeStyle]}`}>
      {name}
    </div>
  );
}
