import { Suspense } from "react";
import { CarCard, CarCardSkeleton } from "@/components/main/car-card";
import { PageHeader } from "@/components/main/page-title";
import { getCars } from "@/lib/actions";
import { Car } from "@/lib/types";
import { CarFilter } from "@/components/main/car-filter";

export const dynamic = "force-dynamic";

// async cars page
const CarsPageAsync = async ({
  search,
  order,
}: {
  search?: string;
  order?: "asc" | "desc";
}) => {
  const cars = await getCars({ search, order });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {cars.length === 0 ? (
        <p className="text-muted-foreground text-center col-span-full">
          No cars found.
        </p>
      ) : (
        cars.map((car: Car) => <CarCard key={car.id} car={car} />)
      )}
    </div>
  );
};

// fallback skeletons
const CarsPageFallback = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, i) => (
        <CarCardSkeleton key={i} />
      ))}
    </div>
  );
};

// top-level page
const CarsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; order?: "asc" | "desc" }>;
}) => {
  // await the searchParams promise
  const params = await searchParams;

  return (
    <div className="m-4 p-4 space-y-4">
      <PageHeader
        title="Cars Management"
        description="Manage your rental cars"
        actionCarButton
        buttonTitle="Add New Car"
      />
      <CarFilter />
      <Suspense fallback={<CarsPageFallback />}>
        <CarsPageAsync search={params.search} order={params.order} />
      </Suspense>
    </div>
  );
};

export default CarsPage;
