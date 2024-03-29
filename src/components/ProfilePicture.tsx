import Image from 'next/image';
import React from 'react';

import { useAuth } from '@/context/hooks/useAuth';
import { cn } from '@/utils/cn';

type Props = {
  size?: string;
  imageSrc?: string;
  userFirstName?: string;
  className?: string;
  isScrolled?: boolean;
};

const ProfilePicture = ({
  size,
  imageSrc,
  isScrolled,
  userFirstName,
  className,
  ...props
}: Props) => {
  const { user } = useAuth();

  const dimensions: { [key: string]: number } = {
    small: 36,
    medium: 75,
    large: 150,
  };

  const width = dimensions[size] || 30;
  const height = dimensions[size] || 30;

  return (
    <Image
      width={isScrolled ? 24 : width}
      height={isScrolled ? 24 : height}
      alt={`${
        !userFirstName ? user?.firstName : userFirstName
      }'s profile picture`}
      src={!imageSrc ? user?.profilePicture : imageSrc}
      className={cn('rounded-full ', className)}
      {...props}
    />
  );
};

export default ProfilePicture;
