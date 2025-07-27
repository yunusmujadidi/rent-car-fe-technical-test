"use client";

import z from "zod";
import { toast } from "sonner";
import { useTransition } from "react";
import { format } from "date-fns";

import { Modal } from "@/components/main/modal";
import { editOrder } from "@/lib/actions";
import { orderFormSchema } from "@/lib/zod-schema";
import { OrderForm } from "@/components/form/order-form";
import { useEditOrderDialog } from "@/hooks/use-order";
import { Order } from "@/lib/types";

export const EditOrderModal = () => {
  const { isOpen, onClose, order } = useEditOrderDialog();
  const [isPending, startTransition] = useTransition();

  // onSubmit func as props
  const onSubmit = (values: z.infer<typeof orderFormSchema>) => {
    startTransition(async () => {
      const res = await editOrder(order!.id, values);
      onClose();
      if (res) {
        toast.success("Success edited order");
      } else {
        toast.error("Error edited order");
      }
    });
  };
  return (
    <Modal
      title="Edit order"
      description="Fill the form below to edit order"
      isOpen={isOpen}
      onClose={onClose}
    >
      {/* order form */}
      <OrderForm
        order={order as Order}
        onSubmit={onSubmit}
        isPending={isPending}
      />
    </Modal>
  );
};
