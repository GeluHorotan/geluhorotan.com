import { Bulb } from '@components/svgs/BulbIcon';
import { Grid } from '@components/svgs/GridIcon';
import { Sun } from '@components/svgs/SunIcon';
import { Moon } from '@components/svgs/MoonIcon';
import { ReactLogo } from '@components/svgs/ReactIcon';
import { NextLogo } from '@components/svgs/NextIcon';
import { TypescriptLogo } from '@components/svgs/TypescriptIcon';
import { NetlifyLogo } from '@components/svgs/NetlifyIcon';
import { ReactQueryLogo } from '@components/svgs/ReactQueryIcon';
import { GraphqlLogo } from '@components/svgs/GraphqlIcon';
import { TailwindLogo } from '@components/svgs/TailwindIcon';
import { StorybookLogo } from '@components/svgs/StorybookIcon';
import { DirectusLogo } from '@components/svgs/DirectusIcon';
import { AwsLogo } from '@components/svgs/AwsIcon';
import { PostgreSqlLogo } from '@components/svgs/PostgresqlIcon';
import { VercelLogo } from '@components/svgs/VercelIcon';
import { StyledComponentsLogo } from '@components/svgs/StyledComponentsIcon';
import { GithubIcon } from '@components/svgs/GithubIcon';
import { TwitterIcon } from '@components/svgs/TwitterIcon';
import { LinkedInIcon } from '@components/svgs/LinkedInIcon';
import { MailIcon } from '@components/svgs/MailIcon';

interface ISvgFinder {
  identifier: string;
  size?: number;
  className?: string;
}

interface IIcon {
  identifier: string;
  svgToRender: React.ReactNode;
}

function SvgFinder({ identifier, size = 24, className }: ISvgFinder) {
  const icons: IIcon[] = [
    {
      identifier: 'bulb',
      svgToRender: <Bulb size={size} className={className} />,
    },
    {
      identifier: 'github',
      svgToRender: <GithubIcon size={size} className={className} />,
    },
    {
      identifier: 'twitter',
      svgToRender: <TwitterIcon size={size} className={className} />,
    },
    {
      identifier: 'linkedin',
      svgToRender: <LinkedInIcon size={size} className={className} />,
    },
    {
      identifier: 'mail',
      svgToRender: <MailIcon size={size} className={className} />,
    },
    {
      identifier: 'grid',
      svgToRender: <Grid size={size} className={className} />,
    },
    {
      identifier: 'moon',
      svgToRender: <Moon size={size} className={className} />,
    },
    {
      identifier: 'sun',
      svgToRender: <Sun size={size} className={className} />,
    },
    {
      identifier: 'reactjs',
      svgToRender: <ReactLogo size={size} className={className} />,
    },
    {
      identifier: 'nextjs',
      svgToRender: <NextLogo size={size} className={className} />,
    },
    {
      identifier: 'typescript',
      svgToRender: <TypescriptLogo size={size} className={className} />,
    },
    {
      identifier: 'netlify',
      svgToRender: <NetlifyLogo size={size} className={className} />,
    },
    {
      identifier: 'reactquery',
      svgToRender: <ReactQueryLogo size={size} className={className} />,
    },
    {
      identifier: 'graphql',
      svgToRender: <GraphqlLogo size={size} className={className} />,
    },
    {
      identifier: 'tailwindcss',
      svgToRender: <TailwindLogo size={size} className={className} />,
    },
    {
      identifier: 'storybook',
      svgToRender: <StorybookLogo size={size} className={className} />,
    },
    {
      identifier: 'directus',
      svgToRender: <DirectusLogo size={size} className={className} />,
    },
    {
      identifier: 'aws',
      svgToRender: <AwsLogo size={size} className={className} />,
    },
    {
      identifier: 'postgresql',
      svgToRender: <PostgreSqlLogo size={size} className={className} />,
    },
    {
      identifier: 'vercel',
      svgToRender: <VercelLogo size={size} className={className} />,
    },
    {
      identifier: 'styledcomponents',
      svgToRender: <StyledComponentsLogo size={size} className={className} />,
    },
  ];

  const icon = icons.find((icon) => icon.identifier === identifier);
  return icon?.svgToRender;
}

export default SvgFinder;
