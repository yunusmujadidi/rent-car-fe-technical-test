import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/app/(dashboard)/(routes)/orders/data-table";
import { columns } from "@/app/(dashboard)/(routes)/orders/columns";
import { PageHeader } from "@/components/main/page-title";
import { getOrders } from "@/lib/actions";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";

export const dynamic = "force-dynamic";

const OrderPageAsync = async () => {
  const data = await getOrders();
  return <DataTable columns={columns} data={data} />;
};

const OrdersPage = () => {
  return (
    <div className="m-4 p-4 space-y-4">
      {/* header */}
      <PageHeader
        title="Orders Management"
        description="Manage your rental car orders"
        actionOrderButton
        buttonTitle="Add New Order"
      />
      {/* content */}
      <Card className="max-w-[98rem]">
        <CardHeader>
          <h1 className="font-semibold text-2xl">All Orders</h1>
          <p className="text-muted-foreground">Orders table</p>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<Loader2 className="size-4 animate-spin" />}>
            <OrderPageAsync />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrdersPage;
