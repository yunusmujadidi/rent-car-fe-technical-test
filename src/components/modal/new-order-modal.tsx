"use client";

import z from "zod";
import { toast } from "sonner";
import { useTransition } from "react";
import { format } from "date-fns";

import { Modal } from "@/components/main/modal";
import { createOrder } from "@/lib/actions";
import { orderFormSchema } from "@/lib/zod-schema";
import { useNewOrderDialog } from "@/hooks/use-order";
import { OrderForm } from "@/components/form/order-form";

export const NewOrderModal = () => {
  const { isOpen, onClose } = useNewOrderDialog();
  const [isPending, startTransition] = useTransition();

  // onSubmit func as props
  const onSubmit = (values: z.infer<typeof orderFormSchema>) => {
    const currentDate = new Date();
    const data = { ...values, order_date: format(currentDate, "yyyy-MM-dd") };
    startTransition(async () => {
      const res = await createOrder(data);
      onClose();
      if (res) {
        toast.success("Success created new order");
      } else {
        toast.error("Error created new order");
      }
    });
  };
  return (
    <Modal
      title="Add New order"
      description="Fill the form below to add new order"
      isOpen={isOpen}
      onClose={onClose}
    >
      {/* order form */}
      <OrderForm onSubmit={onSubmit} isPending={isPending} />
    </Modal>
  );
};
