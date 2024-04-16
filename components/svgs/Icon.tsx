import { Moon } from '@components/svgs/Moon';
import { Sun } from '@components/svgs/Sun';
import { Grid } from '@components/svgs/Grid';
import { Bulb } from '@components/svgs/Bulb';

interface IIcons {
  identifier: string;
  svgToRender: React.ReactNode;
}

interface IIcon {
  identifier: string;
  size?: number;
  className?: string;
}

export function Icon({ identifier, size, className }: IIcon) {
  const icons: IIcons[] = [
    {
      identifier: 'moon',
      svgToRender: <Moon size={size} className={className} />,
    },
    {
      identifier: 'sun',
      svgToRender: <Sun size={size} className={className} />,
    },
    {
      identifier: 'grid',
      svgToRender: <Grid size={size} className={className} />,
    },
    {
      identifier: 'bulb',
      svgToRender: <Bulb size={size} className={className} />,
    },
  ];

  const iconToRender = icons.find((icon) => icon.identifier === identifier);

  return iconToRender?.svgToRender;
}
