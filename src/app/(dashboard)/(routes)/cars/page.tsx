import { Suspense } from "react";
import { Search } from "lucide-react";

import { CarCard, CarCardSkeleton } from "@/components/main/car-card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/main/page-title";
import { getCars } from "@/lib/actions";
import { Car } from "@/lib/types";

export const dynamic = "force-dynamic";

const CarsPageAsync = async () => {
  const data = await getCars();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {data.map((car: Car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

const CarsPageFallback = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, i) => (
        <CarCardSkeleton key={i} />
      ))}
    </div>
  );
};

const CarsPage = () => {
  return (
    <div className="m-4 p-4 space-y-4">
      {/* header */}
      <PageHeader
        title="Cars Management"
        description="Manage your rental cars"
        actionButton
        buttonTitle="Add New Car"
      />
      {/* search bar */}
      <div className="relative">
        <Input
          className="max-w-3xl pl-10"
          placeholder="Search car by name or ID"
        />
        <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>

      {/* content */}
      <Suspense fallback={<CarsPageFallback />}>
        <CarsPageAsync />
      </Suspense>
    </div>
  );
};

export default CarsPage;
