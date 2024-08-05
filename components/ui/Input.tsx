import * as React from 'react';

import { cn } from '@lib/utils';
import { Label } from '@components/ui/Label';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-3 w-full relative   ">
        <div className="flex flex-col gap-1">
          <Label htmlFor={id}>{label}</Label>
          <div className="small text-red-400 !font-light  ">{error}</div>
        </div>
        <input
          type={type}
          className={cn(
            ` flex  h-10 w-full rounded-md  bg-neutral px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-ring  disabled:cursor-not-allowed focus-visible:ring-0  ${error ? 'border-1 border-red-400' : 'border-background border-1'} disabled:opacity-50`,
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
