interface IStage {
  stage: string;
}

interface IStageText {
  [key: string]: string;
  released: string;
  mvp: string;
  development: string;
}
export function Stage({ stage }: IStage) {
  const stageText: IStageText = {
    released: 'Released',
    mvp: 'MVP',
    development: 'In Development',
  };

  const stageStyles: any = {
    circle: {
      released: 'bg-red',
      mvp: 'bg-blue',
      development: 'bg-development',
    },
    text: {
      released: 'text-red',
      mvp: 'text-blue',
      development: 'text-development',
    },
  };
  return (
    <div className={`flex items-center gap-2 ${stageStyles.text[stage]} `}>
      {' '}
      <div
        className={`w-2 h-2 rounded-full ${stageStyles.circle[stage]} `}
      />{' '}
      {stageText[stage]}
    </div>
  );
}
