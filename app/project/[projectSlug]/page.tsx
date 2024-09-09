import { Contributors } from '@components/Contributors';
import { Stage } from '@components/Stage';
import { Technologies } from '@components/Technologies';
import { IQueryParams } from '@customTypes/ApiInterfaces';
import { getProject } from '@data/getProject';
import Image from 'next/image';
import { MeshGradient } from '@components/svgs/MeshGradient';
import { ProjectBody } from '@components/ProjectBody';
import { Contact } from '@components/Contact';
import { ServerError } from '@components/ServerError';
import { getProjectsInfo } from '@data/getProjectsInfo';
import { siteConfig } from '@config/Site';
import { IMetadataParams } from '@customTypes/Metadata';

export const generateMetadata = async ({ params }: IMetadataParams) => {
  const { projectSlug } = params;
  const project = await getProject({ projectSlug });

  return {
    title: project?.name,
    description: project?.description,
    openGraph: {
      title: project?.name,
      description: project?.description,
      url: process.env.SITE_URL,
      siteName: siteConfig.siteName,
      images: [
        {
          url: `${process.env.ASSETS_URL}/${project?.image?.id}`,
          width: 1280,
          height: 628,
        },
      ],
      locale: siteConfig.locale,
      type: siteConfig.type,
    },
  };
};

export const generateStaticParams = async () => {
  const data = await getProjectsInfo();
  let params: any = [];

  data?.forEach((project) => params.push({ projectSlug: project?.slug }));
  return params;
};

export default async function Project({ params }: { params: IQueryParams }) {
  const { projectSlug } = params;
  let project = await getProject({ projectSlug });

  if (!project) {
    return <ServerError className="h-[calc(100svh-64px)] border-2    mt-16" />;
  }

  const { image, stage, name, description, technologies, contributors, body } =
    project;
  return (
    <div
      className={`mt-32   min-h-[calc(100svh-64px)]   w-full  flex flex-col  gap-36 max-md:gap-20 items-center  max-[1500px]:flex-col max-[1500px]:max-w-8xl  `}
    >
      <div className="w-1/2 px-14  max-[1200px]:px-7   max-[900px]:w-full max-[1500px]:w-[75%] flex flex-col gap-14">
        {/* Project desc */}
        <div className="flex flex-col gap-4 items-center w-full self-center">
          <Stage stage={stage} />
          <h1> {name}</h1>
          <h6 className=" text-center">{description}</h6>
        </div>

        {/* Project Image */}
        <div className="w-full  h-full relative  ">
          <div
            className={`absolute  top-0 right-0 w-full h-full  p-12 max-sm:p-6`}
          >
            <Image
              src={`${process.env.ASSETS_URL}/${image?.id}?key=optimised`}
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

        <ProjectBody body={body} className="mt-6 w-[75%] max-[900px]:w-full " />
      </div>
      <Contact />
    </div>
  );
}
