import { CarCard } from "@/components/main/car-card";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { PlusCircle, Search } from "lucide-react";

const CarsPage = () => {
  return (
    <div className="m-4 p-4 space-y-4">
      {/* header */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Cars Management</h1>
          <p className="text-muted-foreground">Manage your rental cars</p>
        </div>
        <div>
          <Button>
            Add New Car
            <PlusCircle className="size-4 ml-1" />
          </Button>
        </div>
      </div>
      {/* search bar */}
      <div className="relative">
        <Input
          className="max-w-3xl pl-10"
          placeholder="Search car by name or ID"
        />
        <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
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
