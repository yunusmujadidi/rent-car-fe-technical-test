"use client";

import z from "zod";
import { toast } from "sonner";
import { useTransition } from "react";

import { useEditCarDialog } from "@/hooks/use-car";
import { Modal } from "@/components/main/modal";
import { CarForm } from "@/components/form/car-form";
import { carFormSchema } from "@/lib/zod-schema";
import { Car } from "@/lib/types";
import { editCar } from "@/lib/actions";

export const EditCarModal = () => {
  const [isPending, startTransition] = useTransition();
  const { isOpen, onClose, car } = useEditCarDialog();

  const onSubmit = (values: z.infer<typeof carFormSchema>) => {
    startTransition(async () => {
      const res = await editCar(car!.id, {
        ...values,
        day_rate: values.day_rate,
        month_rate: values.month_rate,
      });
      onClose();
      if (res) {
        toast.success("Success edited new car");
      } else {
        toast.error("Error edited new car");
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
