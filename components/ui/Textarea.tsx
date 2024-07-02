import * as React from 'react';

import { cn } from '@lib/utils';
import { Label } from './Label';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, id, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-3 w-full relative  ">
        <Label htmlFor={id}>{label}</Label>
        <div className="small text-red-400 !font-light  absolute right-0">
          {error}
        </div>
        <textarea
          className={cn(
            ` flex  min-h-[80px]  w-full rounded-md  bg-neutral px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring   disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-1 border-red-400' : 'border-background border-1'}`,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
