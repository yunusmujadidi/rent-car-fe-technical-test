"use client";

import { Button } from "@/components/ui/button";
import { useEditCarDialog } from "@/hooks/use-car";
import { Edit } from "lucide-react";

export const EditCarButton = () => {
  const { onOpen } = useEditCarDialog();
  return (
    <Button
      onClick={() => {
        onOpen();
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
