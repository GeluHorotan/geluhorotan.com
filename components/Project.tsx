import Image from 'next/image';
import { MeshGradient } from '@components/svgs/MeshGradient';
import { Stage } from '@components/Stage';
import { Technologies } from '@components/Technologies';
import { Contributors } from '@components/Contributors';
import { Button } from './ui/Button';
import Link from 'next/link';

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
    url,
    slug,
  } = project;
  const orientation: 'normal' | 'reversed' = isReversed ? 'reversed' : 'normal';

  const styles: IStyles = {
    container: {
      normal: 'flex-row',
      reversed: 'flex-row-reverse',
    },
    infoContainer: {
      normal: 'pr-[160px]  max-[1500px]:pr-0',
      reversed: 'pl-[160px]  max-[1500px]:pl-0',
    },
    imageContainer: {
      normal: 'pr-14 max-[1500px]:p-14',
      reversed: 'pl-14 max-[1500px]:p-14',
    },
    imageBorderRadius: {
      normal: 'rounded-tr-xl rounded-br-xl max-[1500px]:rounded-xl',
      reversed: 'rounded-bl-xl rounded-tl-xl max-[1500px]:rounded-xl',
    },
  };

  return (
    <div
      className={`px-14  max-[1200px]:px-7 w-full flex items-center gap-20 max-[1500px]:flex-col max-[1500px]:max-w-8xl  ${styles.container[orientation]}`}
    >
      <div className="w-1/2 max-md:w-full max-[1500px]:w-[75%]  h-full relative  ">
        <div
          className={`absolute  top-0 right-0 w-full h-full ${styles.imageContainer[orientation]} py-14`}
        >
          <Image
            src={`${process.env.ASSETS_URL}/${image.id}?key=optimised`}
            width={1980}
            height={1024}
            alt="test"
            className={` w-full h-full object-cover    ${styles.imageBorderRadius[orientation]}`}
          />
        </div>

        <MeshGradient className={styles.imageBorderRadius[orientation]} />
      </div>
      <div
        className={`w-1/2 max-md:w-full max-[1500px]:w-[75%] h-full   ${styles.infoContainer[orientation]} flex flex-col gap-14`}
      >
        <div className="flex flex-col gap-4">
          <Stage stage={stage} />
          <h4> {name}</h4>
          <p className="line-clamp-3">{description}</p>
        </div>
        <Technologies technologies={technologies} />
        <Contributors contributors={contributors}></Contributors>
        <div className="w-full flex gap-4">
          <Link href={url} className="w-full" target="_blank">
            <Button className="w-full">VISIT</Button>
          </Link>
          <Link href={`/project/${slug}`} className="w-full">
            <Button className="w-full" variant={'outline'}>
              LEARN MORE
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
