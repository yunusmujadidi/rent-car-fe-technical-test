import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlusCircle, Search } from "lucide-react";
import { DataTable } from "./data-table";
import { columns, Payment } from "./columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const OrdersPage = async () => {
  const data = await getData();
  return (
    <div className="m-4 p-4 space-y-4">
      {/* header */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Orders Management</h1>
          <p className="text-muted-foreground">Manage your rental car orders</p>
        </div>
        <div>
          <Button>
            Add New Order
            <PlusCircle className="size-4 ml-1" />
          </Button>
        </div>
      </div>
      {/* search bar */}
      <div className="relative">
        <Input
          className="max-w-3xl pl-10"
          placeholder="Search orders by id, car id, or location"
        />
        <Search className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
      {/* content */}
      <Card>
        <CardHeader>
          <h1 className="font-semibold text-2xl">All Orders</h1>
          <p className="text-muted-foreground">Orders table</p>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersPage;
