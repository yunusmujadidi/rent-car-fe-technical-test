"use client";

import z from "zod";
import { toast } from "sonner";
import { useTransition } from "react";

import { Modal } from "@/components/main/modal";
import { carFormSchema } from "@/lib/zod-schema";
import { Car } from "@/lib/types";
import { useEditCarDialog } from "@/hooks/use-car";
import { editCar } from "@/lib/actions";
import { CarForm } from "../form/car-form";

export const EditCarModal = () => {
  const [isPending, startTransition] = useTransition();
  const { isOpen, onClose, car } = useEditCarDialog();

  const onSubmit = (values: z.infer<typeof carFormSchema>) => {
    startTransition(async () => {
      const res = await editCar(car!.id, values);
      onClose();
      if (res) {
        toast.success("Success edited car");
      } else {
        toast.error("Error edited car");
      }
    });
  };
  return (
    <Modal
      title="Edit Car"
      description="Edit the form below"
      isOpen={isOpen}
      onClose={onClose}
    >
      <CarForm car={car as Car} onSubmit={onSubmit} isPending={isPending} />
    </Modal>
  );
};
