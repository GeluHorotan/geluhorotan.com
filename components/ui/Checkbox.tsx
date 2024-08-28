'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@lib/utils';

interface ICheckbox
  extends Omit<
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    'value'
  > {
  error: string;
  children: React.ReactNode;
  name: string;
  value: boolean;
  // eslint-disable-next-line no-unused-vars
  setFieldValue: (name: string, e: boolean) => void;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  ICheckbox
>(
  (
    { setFieldValue, className, name, value, children, error, ...props },
    ref
  ) => (
    <div className="flex  items-center gap-2">
      <CheckboxPrimitive.Root
        onCheckedChange={(e: boolean) => {
          setFieldValue(name, e);
        }}
        checked={value}
        ref={ref}
        className={cn(
          ` peer h-4 w-4 shrink-0 rounded-sm border ${error ? 'border-red' : 'border-primary'} ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground`,
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn(' flex items-center justify-center  text-background')}
        >
          <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <div className=" w-full">{children}</div>
    </div>
  )
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
