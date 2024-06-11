import { Bulb } from './Bulb';
import { Grid } from './Grid';
import { Sun } from './Sun';
import { Moon } from './Moon';

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
  ];

  const icon = icons.find((icon) => icon.identifier === identifier);
  return icon?.svgToRender;
}

export default SvgFinder;
