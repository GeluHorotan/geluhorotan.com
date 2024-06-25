import { Bulb } from '@components/svgs/Bulb';
import { Grid } from '@components/svgs/Grid';
import { Sun } from '@components/svgs/Sun';
import { Moon } from '@components/svgs/Moon';
import { ReactLogo } from '@components/svgs/ReactLogo';
import { NextLogo } from '@components/svgs/NextLogo';
import { TypescriptLogo } from '@components/svgs/TypescriptLogo';
import { NetlifyLogo } from '@components/svgs/NetlifyLogo';
import { ReactQueryLogo } from '@components/svgs/ReactQueryLogo';
import { GraphqlLogo } from '@components/svgs/GraphqlLogo';
import { TailwindLogo } from '@components/svgs/TailwindLogo';
import { StorybookLogo } from '@components/svgs/StorybookLogo';
import { DirectusLogo } from '@components/svgs/DirectusLogo';
import { AwsLogo } from '@components/svgs/AwsLogo';
import { PostgreSqlLogo } from '@components/svgs/PostgreSqlLogo';
import { VercelLogo } from '@components/svgs/VercelLogo';
import { StyledComponentsLogo } from '@components/svgs/StyledComponentsLogo';

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
