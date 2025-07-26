import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";

interface PageTitleProps {
  title: string;
  description: string;
  actionButton?: boolean;
  buttonTitle?: string;
}

export const PageHeader = ({
  title,
  description,
  actionButton = false,
  buttonTitle = "",
}: PageTitleProps) => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div>
        {actionButton && (
          <Button>
            {buttonTitle}
            <PlusCircle className="size-4 ml-1" />
          </Button>
        )}
      </div>
    </div>
  );
};
