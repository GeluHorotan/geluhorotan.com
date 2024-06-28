import * as React from 'react';

import { cn } from '@lib/utils';
import { Label } from '@components/ui/Label';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-3 w-full">
        <Label htmlFor={id}>{label}</Label>
        <input
          type={type}
          className={cn(
            'flex  h-10 w-full rounded-md  bg-neutral px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed focus-visible:ring-primary disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
