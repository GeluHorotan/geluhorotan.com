import { cn } from '@lib/utils';
import { ErrorIllustration } from '@components/svgs/ErrorIllustration';

interface IServerError {
  heading?: string;
  subHeading?: string;
  className?: string;
}

export function ServerError({
  heading = 'Something went wrong!',
  subHeading = 'Please try again later!',
  className,
}: IServerError) {
  return (
    <section
      className={cn(
        'flex-col gap-4 flex px-14 max-[1200px]:px-7 w-full max-w-8xl self-center items-center justify-center',
        className
      )}
    >
      <div className="flex flex-col items-center">
        <h2 className="text-primary text-center">{heading}</h2>
        <h4 className="font-normal text-center">{subHeading}</h4>
      </div>
      <ErrorIllustration />
    </section>
  );
}
