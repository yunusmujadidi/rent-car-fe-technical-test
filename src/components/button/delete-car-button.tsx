"use client";
import { toast } from "sonner";
import { useTransition } from "react";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteCar } from "@/lib/actions";
import { useConfirm } from "@/hooks/use-confirm";

export const DeleteCarButton = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "You are about to delete this car."
  );
  const handleDeleteCar = async (id: string) => {
    const ok = await confirm();
    if (ok) {
      startTransition(async () => {
        try {
          const promise = deleteCar(id);
          toast.promise(promise, {
            loading: "Deleting car...",
            success: () => "Car deleted successfully",
            error: "Error deleting car",
          });
        } catch (error: unknown) {
          toast.error(`Error deleting car : ${error}`);
        }
      });
    }
  };
  return (
    <>
      <ConfirmDialog />
      <Button
        disabled={isPending}
        onClick={() => handleDeleteCar(id)}
        variant="destructive"
        size="sm"
      >
        <Trash2 className="size-4" />
      </Button>
    </>
  );
};
