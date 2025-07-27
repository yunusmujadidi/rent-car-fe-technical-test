"use client";

import { useNewOrderDialog } from "@/hooks/use-order";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const NeworderButton = ({ buttonTitle }: { buttonTitle: string }) => {
  const { onOpen } = useNewOrderDialog();
  return (
    <Button onClick={() => onOpen()}>
      {buttonTitle}
      <PlusCircle className="size-4 ml-1" />
    </Button>
  );
};
