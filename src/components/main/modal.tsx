import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  onSubmit: () => void;
  isOpen: boolean;
  title: string;
  description: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({
  isOpen,
  children,
  title,
  description,
  onClose,
}: ModalProps) => {
  return (
    <Dialog onOpenChange={onClose} open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
