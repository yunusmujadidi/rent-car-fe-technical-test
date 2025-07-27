"use client";

import { Button } from "@/components/ui/button";
import { useEditCarDialog } from "@/hooks/use-car";
import { Car } from "@/lib/types";
import { Edit } from "lucide-react";

export const EditCarButton = ({ Car }: { Car: Car }) => {
  const { onOpen } = useEditCarDialog();
  return (
    <Button
      onClick={() => {
        onOpen(Car);
      }}
      variant="outline"
      size="sm"
      className="flex-1"
    >
      <Edit className="size-4 mr-2" />
      Edit
    </Button>
  );
};
