import { NewCarButton } from "@/components/button/new-car-button";

interface PageTitleProps {
  title: string;
  description: string;
  actionCarButton?: boolean;
  actionOrderButton?: boolean;
  buttonTitle?: string;
}

export const PageHeader = ({
  title,
  description,
  actionCarButton = false,
  actionOrderButton = false,
  buttonTitle = "",
}: PageTitleProps) => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {actionCarButton && <NewCarButton buttonTitle={buttonTitle} />}
      {actionOrderButton && <NewCarButton buttonTitle={buttonTitle} />}
    </div>
  );
};
