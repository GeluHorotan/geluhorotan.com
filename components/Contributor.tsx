import Image from 'next/image';
import React from 'react';

interface IContributor {
  avatar: string;
  name: string;
  role: string;
}
export function Contributor({ avatar, name, role }: IContributor) {
  return (
    <div className="flex items-center gap-2">
      <Image
        alt={'test'}
        src={`${process.env.ASSETS_URL}/${avatar}?key=optimised`}
        width={128}
        height={128}
        className="rounded-full w-12 h-12 object-cover"
      />
      <div className="flex flex-col gap-0">
        <div className="font-medium">{name}</div>
        <div className="text-base font-light">{role}</div>
      </div>
    </div>
  );
}
