import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import { NewCarButton } from "../button/new-car-button";

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
      <div>{actionButton && <NewCarButton buttonTitle={buttonTitle} />}</div>
    </div>
  );
};
