import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Car } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { CardImage } from "./card-image";
import { Skeleton } from "@/components/ui/skeleton";
import { EditCarButton } from "../button/edit-car-button";

export const CarCard = ({ car }: { car: Car }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow pt-0">
      <CardImage imageSrc={car.image} name={car.name} />
      <CardHeader>
        <div className="flex">
          <div>
            <CardTitle className="text-2xl">{car.name}</CardTitle>
            <CardDescription>ID: {car.id}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-sm text-muted-foreground ">Day Rate:</p>
            <p className="font-medium text-sm">
              {formatCurrency.format(Number(car.day_rate))}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-muted-foreground ">Month Rate:</p>
            <p className="font-medium text-sm">
              {formatCurrency.format(Number(car.month_rate))}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <EditCarButton />
          <Button variant="destructive" size="sm">
            <Trash2 className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const CarCardSkeleton = () => {
  return (
    <Card className="overflow-hidden pt-0">
      <Skeleton className="w-full h-full object-cover aspect-video" />
      <CardHeader>
        <div className="space-y-2">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        </div>
        <div className="flex space-x-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-10" />
        </div>
      </CardContent>
    </Card>
  );
};
