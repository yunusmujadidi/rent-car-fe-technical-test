"use client";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEditOrderDialog } from "@/hooks/use-order";
import { Order } from "@/lib/types";
import { deleteOrder } from "@/lib/actions";
import { toast } from "sonner";
import { useTransition } from "react";
import { useConfirm } from "@/hooks/use-confirm";

export const OrderActions = ({ order }: { order: Order }) => {
  const [isPending, startTransition] = useTransition();
  const { onOpen } = useEditOrderDialog();
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this order."
  );

  const handleDeleteOrder = async (id: string) => {
    const ok = await confirm();
    if (ok) {
      startTransition(async () => {
        try {
          const promise = deleteOrder(id);
          toast.promise(promise, {
            loading: "Deleting order...",
            success: () => "Order deleted successfully",
            error: "Error deleting order",
          });
        } catch (error) {
          toast.error("Error deleting order");
        }
      });
    }
  };
  return (
    <>
      <ConfirmDialog />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(order.id)}
          >
            Copy order ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => onOpen(order)}>
            Edit order
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={isPending}
            onClick={() => handleDeleteOrder(order.id)}
          >
            Delete order
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
