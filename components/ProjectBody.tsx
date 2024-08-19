import parse, { Element } from 'html-react-parser';
import Image from 'next/image';
import { AspectRatio } from '@components/ui/AspectRatio';
import { cn } from '@lib/utils';

interface IProjectBody {
  body: string;
  className?: string;
}
export function ProjectBody({ body, className }: IProjectBody) {
  const options = {
    replace: (domNode: any) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === 'img') {
          const { src, alt } = domNode.attribs;
          const imageID = src.split('assets/').pop();

          return (
            <Image
              className="object-cover w-full h-full"
              src={`${process.env.ASSETS_URL}/${imageID}&key=optimised`}
              alt={alt}
              width={1280}
              height={720}
            />
          );
        }
      }
    },
  };
  const getParsedHTML = (body: string) => {
    return parse(body, options);
  };

  return (
    <div className={cn('rich-text w-[75%] self-center', className)}>
      {getParsedHTML(body)}
    </div>
  );
}
