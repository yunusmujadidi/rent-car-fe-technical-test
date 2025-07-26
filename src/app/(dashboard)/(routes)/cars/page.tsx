import { PlusCircle, Search } from "lucide-react";

import { CarCard } from "@/components/main/car-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/main/page-title";

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
          className="max-w-3xl pl-10 bg-foreground"
          placeholder="Search car by name or ID"
        />
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
};

export default CarsPage;
