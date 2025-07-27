"use client";

import z from "zod";
import { toast } from "sonner";
import { useTransition } from "react";

import { useEditOrderDialog } from "@/hooks/use-order";
import { Modal } from "@/components/main/modal";
import { orderFormSchema } from "@/lib/zod-schema";
import { Order } from "@/lib/types";
import { editOrder } from "@/lib/actions";
import { OrderForm } from "@/components/form/order-form";

export const EditCarModal = () => {
  const [isPending, startTransition] = useTransition();
  const { isOpen, onClose, order } = useEditOrderDialog();

  const onSubmit = (values: z.infer<typeof orderFormSchema>) => {
    startTransition(async () => {
      const res = await editOrder(order!.id, values);
      onClose();
      if (res) {
        toast.success("Success edited new Order");
      } else {
        toast.error("Error edited new Order");
      }
    });
  };
  return (
    <Modal
      title="Edit Order"
      description="Edit the form below"
      isOpen={isOpen}
      onClose={onClose}
    >
      <OrderForm
        order={order as Order}
        onSubmit={onSubmit}
        isPending={isPending}
      />
    </Modal>
  );
};
