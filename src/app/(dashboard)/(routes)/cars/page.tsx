import { Suspense } from "react";

import { CarCard, CarCardSkeleton } from "@/components/main/car-card";
import { PageHeader } from "@/components/main/page-title";
import { getCars } from "@/lib/actions";
import { Car } from "@/lib/types";
import { CarFilter } from "@/components/main/car-filter";

export const dynamic = "force-dynamic";

// async page
const CarsPageAsync = async ({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) => {
  // fetch car
  const data = await getCars(searchParams);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {data.map((car: Car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

// cars page fallback
const CarsPageFallback = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, i) => (
        <CarCardSkeleton key={i} />
      ))}
    </div>
  );
};

const CarsPage = ({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) => {
  return (
    <div className="m-4 p-4 space-y-4">
      {/* header */}
      <PageHeader
        title="Cars Management"
        description="Manage your rental cars"
        actionCarButton
        buttonTitle="Add New Car"
      />
      {/* car filter */}
      <CarFilter />

      {/* content */}
      <Suspense fallback={<CarsPageFallback />}>
        <CarsPageAsync searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default CarsPage;
