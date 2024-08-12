import { IIconProps } from '@customTypes/IconInterfaces';
import { cn } from '@lib/utils';

export function ReactLogo({ size = 24, className }: IIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={cn('fill-[#61DAFB]', className)}
      viewBox="0 0 16 14.249"
    >
      <g
        id="Icon_akar-react-fill"
        data-name="Icon akar-react-fill"
        transform="translate(0 -0.667)"
      >
        <path
          id="Path_50"
          data-name="Path 50"
          d="M16,7.793c0-1.06-1.327-2.065-3.363-2.687.47-2.074.261-3.725-.659-4.253A1.43,1.43,0,0,0,11.248.67V1.4a.758.758,0,0,1,.372.085c.443.255.636,1.223.486,2.469-.036.307-.095.629-.167.959a15.8,15.8,0,0,0-2.071-.355A15.9,15.9,0,0,0,8.512,2.923a4.812,4.812,0,0,1,2.74-1.529V.667A5.457,5.457,0,0,0,7.993,2.415,5.463,5.463,0,0,0,4.735.68v.727a4.834,4.834,0,0,1,2.74,1.52A15.486,15.486,0,0,0,6.128,4.554a15.229,15.229,0,0,0-2.074.359q-.108-.468-.17-.945c-.153-1.247.036-2.215.477-2.472a.723.723,0,0,1,.375-.085V.683A1.459,1.459,0,0,0,4,.865c-.917.529-1.122,2.175-.649,4.243C1.321,5.735,0,6.736,0,7.793s1.327,2.065,3.363,2.687c-.47,2.075-.261,3.725.659,4.253a1.433,1.433,0,0,0,.733.183,5.457,5.457,0,0,0,3.259-1.748A5.458,5.458,0,0,0,11.271,14.9a1.453,1.453,0,0,0,.737-.183c.917-.528,1.122-2.175.649-4.243C14.679,9.854,16,8.849,16,7.793ZM11.753,5.617q-.19.654-.44,1.288a17.629,17.629,0,0,0-.9-1.546c.463.069.91.153,1.337.258ZM10.26,9.091q-.366.639-.786,1.246a16.969,16.969,0,0,1-2.941,0A16.971,16.971,0,0,1,5.065,7.8,17.376,17.376,0,0,1,6.527,5.256a16.97,16.97,0,0,1,2.941,0c.271.388.535.8.789,1.24s.473.86.679,1.3q-.311.664-.675,1.3Zm1.053-.424c.176.437.327.874.45,1.3-.427.1-.877.193-1.343.261q.485-.757.893-1.559Zm-3.307,3.48A13.4,13.4,0,0,1,7.1,11.1c.293.013.593.023.9.023s.61-.007.907-.023A12.678,12.678,0,0,1,8.007,12.147ZM5.58,10.225q-.674-.1-1.337-.257c.121-.421.271-.855.44-1.288.134.26.275.521.428.783S5.42,9.978,5.58,10.225ZM7.99,3.439A13.4,13.4,0,0,1,8.9,4.483C8.6,4.469,8.3,4.459,8,4.459s-.61.007-.907.023A12.679,12.679,0,0,1,7.99,3.439ZM5.577,5.36q-.485.755-.893,1.555-.257-.638-.45-1.3c.427-.1.877-.189,1.343-.257ZM2.625,9.443C1.471,8.951.724,8.3.724,7.793s.747-1.161,1.9-1.65c.28-.121.587-.229.9-.329A15.825,15.825,0,0,0,4.262,7.8a15.444,15.444,0,0,0-.723,1.976q-.465-.144-.913-.333ZM4.38,14.1c-.443-.253-.636-1.223-.486-2.468.036-.307.095-.63.167-.959a15.822,15.822,0,0,0,2.071.356,15.913,15.913,0,0,0,1.357,1.631,4.812,4.812,0,0,1-2.74,1.529A.778.778,0,0,1,4.38,14.1Zm7.736-2.485c.153,1.246-.036,2.215-.477,2.472a.724.724,0,0,1-.375.085,4.83,4.83,0,0,1-2.74-1.52,15.34,15.34,0,0,0,1.347-1.627,15.228,15.228,0,0,0,2.074-.359,9.25,9.25,0,0,1,.17.949Zm1.255-2.175c-.28.121-.587.229-.9.329a15.655,15.655,0,0,0-.733-1.986,15.421,15.421,0,0,0,.723-1.976q.466.144.917.333c1.155.492,1.9,1.138,1.9,1.65s-.75,1.161-1.9,1.65Z"
        />
        <path
          id="Path_51"
          data-name="Path 51"
          d="M8,9.283A1.491,1.491,0,1,0,6.506,7.793,1.491,1.491,0,0,0,8,9.283Z"
        />
      </g>
    </svg>
  );
}
