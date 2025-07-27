"use client";

import { useNewCarDialog } from "@/hooks/use-car";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const NewCarButton = ({ buttonTitle }: { buttonTitle: string }) => {
  const { onOpen } = useNewCarDialog();
  return (
    <Button onClick={() => onOpen()}>
      {buttonTitle}
      <PlusCircle className="size-4 ml-1" />
    </Button>
  );
};
