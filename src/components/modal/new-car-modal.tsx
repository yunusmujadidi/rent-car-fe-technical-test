"use client";

import { useNewCarDialog } from "@/hooks/use-car";
import { Modal } from "../main/modal";

export const NewCarModal = () => {
  const { isOpen, onClose } = useNewCarDialog();
  return (
    <Modal
      title="Add New Car"
      description="Fill the form below to add new car"
      isOpen={isOpen}
      onSubmit={() => {}}
      onClose={onClose}
    >
      New Car Form
    </Modal>
  );
};
