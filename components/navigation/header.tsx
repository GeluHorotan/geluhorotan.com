'use client';
import { Menu, Moon, Shield } from 'lucide-react';
import { motion, useCycle } from 'framer-motion';

type Position = 'absolute' | 'fixed' | 'relative';

export function Header() {
  const [isOpen, setIsOpen] = useCycle(false, true);

  const menuVariant = {
    open: {
      width: '100%',
      height: 'calc(100vh - 2rem)', // Adjust height based on your header height
      position: 'absolute' as Position,

      right: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    closed: {
      position: 'absolute' as Position,

      right: 0,
      width: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };

  return (
    <div className="max-w-8xl relative w-full py-6 flex justify-between max-md:py-0 bg-primary ">
      <div className=" z-20 max-md:bg-primary rounded-tl-xl rounded-br-xl h-full max-md:p-4 max-md:mt-4">
        <Shield size={30} />
      </div>
      <div className="flex items-center justify-center gap-8 max-md:hidden">
        <h6 className="font-medium ">HOME</h6>
        <h6 className="font-medium ">PROJECTS</h6>
        <h6 className="font-medium ">CONTACT</h6>
      </div>
      <div className="max-md:hidden">
        <Moon size={30} />
      </div>
      <motion.div
        className={`md:hidden bg-accent flex items-center p-4 max-md:mt-4 rounded-xl text-primary z-20 hover:bg-cyan-400  ${isOpen ? 'hover:rounded-tl-none hover:rounded-br-none' : ''}`}
        onClick={() => setIsOpen()}
      >
        <Menu size={30} />
      </motion.div>

      <motion.div
        initial="closed"
        variants={menuVariant}
        animate={isOpen ? 'open' : 'closed'}
        className={`z-10 md:hidden bg-accent  mt-4  rounded-xl rounded-t-2xl `}
      />
    </div>
  );
}
