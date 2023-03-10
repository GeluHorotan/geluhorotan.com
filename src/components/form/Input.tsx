import { motion, useAnimationControls } from 'framer-motion';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { BiErrorCircle } from 'react-icons/bi';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/Tooltip';

type Props = {
  value: string;
  type: string;
  name: string;
  error: string;
  id: string;
  labelColor?: string;
  backgroundColor: string;
  label: string;
  icon?: ReactNode;
  placeholder?: string;
  onChangeHandler: () => void;
  onBlurHandler: () => void;
};

const Input = ({
  value,
  onChangeHandler,
  onBlurHandler,
  type,
  name,
  error,
  id,
  label,
  placeholder,
  labelColor,
  backgroundColor,
  icon,
}: Props) => {
  const controls = useAnimationControls();

  useEffect(() => {
    if (error) {
      controls.start({ x: [0, 3, 0] });
    }
  }, [error]);

  return (
    <TooltipProvider>
      <Tooltip>
        <motion.div
          initial={{ x: 0 }}
          animate={controls}
          transition={{ type: 'spring', duration: 0.1 }}
          className="relative flex flex-col gap-1  "
        >
          <label
            htmlFor={name}
            className={`${labelColor || 'text-secondary'} ${
              !error || 'text-error'
            } flex items-center gap-1`}
          >
            {!icon && error && (
              <TooltipTrigger className="flex ">
                <BiErrorCircle
                  className={`${error ? 'text-error' : labelColor}`}
                  size={16}
                ></BiErrorCircle>
              </TooltipTrigger>
            )}
            {label}
          </label>

          <div className={` relative w-full    `}>
            <input
              className={`peer relative w-full appearance-none rounded-lg text-base font-light text-secondary ${
                backgroundColor || 'bg-primary_t'
              } py-2 ${icon ? 'indent-8' : 'px-4'} outline-none ${
                error ? 'border border-error' : ''
              } `}
              placeholder={placeholder || ''}
              name={name}
              type={type}
              id={id}
              value={value}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />

            {icon && (
              <div className=" absolute top-2/4 left-2 -translate-y-2/4 ">
                {!error ? (
                  icon
                ) : (
                  <TooltipTrigger className="flex ">
                    <BiErrorCircle
                      className="text-error"
                      size={16}
                    ></BiErrorCircle>
                  </TooltipTrigger>
                )}
              </div>
            )}

            {error && (
              <TooltipContent className="bg-primary text-secondary">
                <p>{error}</p>
              </TooltipContent>
            )}
          </div>
        </motion.div>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Input;
