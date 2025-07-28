"use client";

import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import { OrderActions } from "@/app/(dashboard)/(routes)/orders/order-actions";
import { Button } from "@/components/ui/button";
import { Order } from "@/lib/types";
import { calculateDays, safeFormatDate } from "@/lib/utils";

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Order ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "rental_period",
    header: "Rental Period",
    cell: ({ row }) => {
      const pickupDate = row.original.pickup_date;
      const dropoffDate = row.original.dropoff_date;
      const days = calculateDays(pickupDate, dropoffDate);

      return (
        <div className="space-y-1">
          <div className="text-sm">
            {safeFormatDate(pickupDate)} - {safeFormatDate(dropoffDate)}
          </div>
          <div className="text-sm text-muted-foreground">{days} days</div>
        </div>
      );
    },
  },
  {
    id: "locations",
    header: "Locations",
    cell: ({ row }) => {
      const pickup = row.original.pickup_location;
      const dropoff = row.original.dropoff_location;

      return (
        <div className="space-y-1">
          <div className="flex items-center text-sm">
            <ArrowUpDown className="h-4 w-4 mr-1 text-primary" />
            <span>Pickup: {pickup || "N/A"}</span>
          </div>
          <div className="flex items-center text-sm">
            <ArrowUpDown className="h-4 w-4 mr-1 text-primary-foreground" />
            <span>Dropoff: {dropoff || "N/A"}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "order_date",
    header: "Order Date",
    cell: ({ row }) => {
      return safeFormatDate(row.original.order_date);
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <OrderActions order={row.original} />;
    },
  },
];
