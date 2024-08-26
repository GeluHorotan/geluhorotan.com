import { Button } from '@components/ui/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/ui/Dialog';

interface ILegalWrapper {
  children: React.ReactNode;
  title: string;
}
export function LegalWrapper({ children, title }: ILegalWrapper) {
  return (
    <Dialog>
      <DialogTrigger>{title}</DialogTrigger>
      <DialogContent className="h-[75%] w-[75%] max-md:w-[90%] ">
        <DialogHeader className="px-4 max-md:px-0">
          <DialogTitle>
            <h3>{title}</h3>
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className=" overflow-y-scroll max-md:px-0 ">
          {children}
        </DialogDescription>
        <DialogClose>
          <Button>Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
