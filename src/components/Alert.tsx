import { motion } from 'framer-motion';
import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { MdErrorOutline, MdTaskAlt } from 'react-icons/md';

import { useAlert } from '@/context/hooks/useAlert';

type Props = {
  id: string;
  message: string | React.ReactNode;
  isFulfilled: boolean;
  isPending: boolean;
  alertTitle: string;
};

const Alert = ({ id, message, isFulfilled, isPending, alertTitle }: Props) => {
  const { deleteAlert, alertDuration } = useAlert();

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.1 }}
      className=" relative cursor-pointer  bg-[#2B2A4C] dark:bg-[#413543]  "
    >
      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: isPending ? '100%' : '0%' }}
        transition={{ duration: alertDuration + 0.3 }}
        className={`absolute top-0 left-0 h-1  ${
          isFulfilled ? 'bg-success' : isPending ? 'bg-accent_t_2' : 'bg-error'
        } `}
      />

      <div className="relative flex  items-center justify-between   py-5 px-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            {isFulfilled ? (
              <MdTaskAlt size={18} className={'text-success'} />
            ) : isPending ? (
              <AiOutlineQuestionCircle
                size={18}
                className={'text-accent_t_2'}
              />
            ) : (
              <MdErrorOutline size={18} className={'text-error'} />
            )}

            <h6 className=" tracking-tight text-secondary ">{alertTitle}</h6>
          </div>
          <p className="  text-base text-secondary_s_2">{message && message}</p>
        </div>

        <p className=" text-blue-400" onClick={() => deleteAlert(id)}>
          Dismiss
        </p>
      </div>
    </motion.div>
  );
};

export default Alert;
