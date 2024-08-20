interface ISectionTitle {
  children: React.ReactNode;
  desc: string;
}
export function SectionTitle({ children, desc }: ISectionTitle) {
  return (
    <div className="flex gap-4 flex-col items-center justify-center w-1/2 max-[1200px]:w-full  text-center">
      <h2 className="w-max max-md:w-full ">{children}</h2>
      <h6 className="w-1/2 max-md:w-[75% max-sm:w-full ">{desc}</h6>
    </div>
  );
}
