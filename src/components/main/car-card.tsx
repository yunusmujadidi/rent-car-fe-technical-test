"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Car } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { CardImage } from "@/components/main/card-image";
import { Skeleton } from "@/components/ui/skeleton";
import { EditCarButton } from "@/components/button/edit-car-button";
import { DeleteCarButton } from "../button/delete-car-button";

export const CarCard = ({ car }: { car: Car }) => {
  return (
    // card
    <Card className="overflow-hidden hover:shadow-lg transition-shadow pt-0">
      {/* card image */}
      <CardImage imageSrc={car.image} name={car.name} />
      {/* card header */}
      <CardHeader>
        <div className="flex">
          <div>
            <CardTitle className="text-2xl">{car.name}</CardTitle>
            <CardDescription>ID: {car.id}</CardDescription>
          </div>
        </div>
      </CardHeader>
      {/* card content */}
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
        {/* action card button */}
        <div className="flex space-x-2">
          <EditCarButton Car={car} />
          <DeleteCarButton id={car.id} />
        </div>
      </CardContent>
    </Card>
  );
};

// card skeleton for react suspense
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
