import { Contributors } from '@components/Contributors';
import { Stage } from '@components/Stage';
import { Technologies } from '@components/Technologies';
import { IQueryParams } from '@customTypes/ApiInterfaces';
import { getProject } from '@data/getProject';
import Image from 'next/image';
import { MeshGradient } from '@components/svgs/MeshGradient';

export default async function Project({ params }: { params: IQueryParams }) {
  const { projectSlug } = params;
  const project = await getProject({ projectSlug });

  if (!project) {
    return <div>Method didnt work.</div>;
  }

  const { image, stage, name, description, technologies, contributors, body } =
    project[0];
  return (
    <div
      className={`mt-32  min-h-[calc(100svh-64px)]   w-full  flex flex-col  items-center  max-[1500px]:flex-col max-[1500px]:max-w-8xl  `}
    >
      <div className="w-1/2  max-md:w-full max-[1500px]:w-[75%] flex flex-col gap-14">
        {/* Project desc */}
        <div className="flex flex-col gap-4 items-center">
          <Stage stage={stage} />
          <h4> {name}</h4>
          <p className="line-clamp-3 text-center">{description}</p>
        </div>

        {/* Project Image */}
        <div className="w-full  h-full relative  ">
          <div className={`absolute  top-0 right-0 w-full h-full  p-12`}>
            <Image
              src={`${process.env.ASSETS_URL}/${image.id}?key=optimised`}
              width={1980}
              height={1024}
              alt="test"
              className={` w-full h-full object-cover rounded-xl   `}
            />
          </div>

          <MeshGradient className="rounded-xl " />
        </div>

        <Technologies technologies={technologies} />
        <Contributors contributors={contributors} />

        <div>{body}</div>
      </div>
    </div>
  );
}
