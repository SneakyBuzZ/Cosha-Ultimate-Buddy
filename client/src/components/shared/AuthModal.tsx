import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModalPropsType } from "@/lib/types";
import AuthForm from "@/components/forms/AuthForm";

const AuthModal = ({ title, description, children }: ModalPropsType) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="flex flex-col justify-center items-center">
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-center">
            {description}
          </DialogDescription>
        </DialogHeader>
        <AuthForm />
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
