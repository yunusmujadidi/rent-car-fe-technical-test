"use client";

import { useEditCarDialog } from "@/hooks/use-car";
import { Modal } from "../main/modal";

export const EditCarModal = () => {
  const { isOpen, onClose } = useEditCarDialog();
  return (
    <Modal
      title="Edit Car"
      description="Edit the form below"
      isOpen={isOpen}
      onSubmit={() => {}}
      onClose={onClose}
    >
      Edit Car Form
    </Modal>
  );
};
