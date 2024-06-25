import Image from 'next/image';
import { MeshGradient } from '@components/svgs/MeshGradient';
import { Stage } from '@components/Stage';
import { Technologies } from '@components/Technologies';
import { Contributors } from '@components/Contributors';

interface IProject {
  project: any;
  isReversed: boolean;
}

interface IOrientation {
  normal: string;
  reversed: string;
}

interface IStyles {
  container: IOrientation;
  infoContainer: IOrientation;
  imageContainer: IOrientation;
  imageBorderRadius: IOrientation;
}

export function Project({ project, isReversed }: IProject) {
  const {
    image,
    stage,
    name,
    description,
    technologies,
    contributors,
    // url,
    // slug,
  } = project;
  const orientation: 'normal' | 'reversed' = isReversed ? 'reversed' : 'normal';

  const styles: IStyles = {
    container: {
      normal: 'flex-row',
      reversed: 'flex-row-reverse',
    },
    infoContainer: {
      normal: 'pr-[260px]',
      reversed: 'pl-[260px]',
    },
    imageContainer: {
      normal: 'pr-14',
      reversed: 'pl-14',
    },
    imageBorderRadius: {
      normal: 'rounded-tr-xl rounded-br-xl',
      reversed: 'rounded-bl-xl rounded-tl-xl',
    },
  };

  return (
    <div
      className={` w-full flex items-center gap-20   ${styles.container[orientation]}`}
    >
      <div className="w-1/2 h-full relative ">
        <div
          className={`absolute top-0 right-0 w-full h-full ${styles.imageContainer[orientation]} py-14`}
        >
          <Image
            src={`${process.env.ASSETS_URL}/${image.id}`}
            width={1980}
            height={1024}
            alt="test"
            className={` w-full h-full object-cover    ${styles.imageBorderRadius[orientation]}`}
          />
        </div>

        <MeshGradient className={styles.imageBorderRadius[orientation]} />
      </div>
      <div
        className={`w-1/2 h-full  ${styles.infoContainer[orientation]} flex flex-col gap-14`}
      >
        <div className="flex flex-col gap-4">
          <Stage stage={stage} />
          <h4> {name}</h4>
          <h6>{description}</h6>
        </div>
        <Technologies technologies={technologies} />
        <Contributors contributors={contributors}></Contributors>
      </div>
    </div>
  );
}
