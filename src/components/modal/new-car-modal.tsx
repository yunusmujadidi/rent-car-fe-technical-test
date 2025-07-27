"use client";

import z from "zod";
import { toast } from "sonner";
import { useTransition } from "react";

import { useNewCarDialog } from "@/hooks/use-car";
import { Modal } from "@/components/main/modal";
import { CarForm } from "@/components/form/car-form";
import { createCar } from "@/lib/actions";
import { carFormSchema } from "@/lib/zod-schema";

export const NewCarModal = () => {
  const { isOpen, onClose } = useNewCarDialog();
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof carFormSchema>) => {
    startTransition(async () => {
      const res = await createCar({
        ...values,
        day_rate: values.day_rate,
        month_rate: values.month_rate,
      });
      onClose();
      if (res) {
        toast.success("Success created new car");
      } else {
        toast.error("Error created new car");
      }
    });
  };
  return (
    <Modal
      title="Add New Car"
      description="Fill the form below to add new car"
      isOpen={isOpen}
      onClose={onClose}
    >
      <CarForm onSubmit={onSubmit} isPending={isPending} />
    </Modal>
  );
};
