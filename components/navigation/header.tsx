import { Menu, Moon, Shield } from 'lucide-react';

export function Header() {
  return (
    <div className="max-w-8xl w-full py-6 flex justify-between items-cebter max-md:py-0  bg-cyan-400">
      <div className=" z-20 max-md:bg-red-700  rounded-xl h-full max-md:p-4 max-md:mt-4">
        <Shield size={30} />
      </div>
      <div className="flex items-center justify-center gap-8 max-md:hidden">
        <h6 className="font-medium ">HOME</h6>
        <h6 className="font-medium ">PROJECTS</h6>
        <h6 className="font-medium ">CONTACT</h6>
      </div>
      <div className="max-md:hidden">
        <Moon size={30}></Moon>
      </div>
      <div className="md:hidden bg-accent flex items-center p-4  max-md:mt-4  rounded-xl text-surface z-20">
        <Menu />
      </div>
      <div className=" z-10 md:hidden bg-red-400/100 absolute m-4 rounded-xl inset-0"></div>
    </div>
  );
}
