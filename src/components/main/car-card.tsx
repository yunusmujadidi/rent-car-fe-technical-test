import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
export const CarCard = () => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow pt-0">
      <img
        src="https://imgcdn.oto.com/large/gallery/exterior/133/2222/tesla-model-x-front-angle-low-view-481563.jpg"
        alt="cars image"
      />

      <CardHeader>
        <div className="flex">
          <div>
            <CardTitle className="text-lg">Lambhorgini Aventador</CardTitle>
            <CardDescription>ID: 123</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-sm ">Day Rate:</p>
            <p className="font-medium">Rp.50.000</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm ">Month Rate:</p>
            <p className="font-medium">Rp.50.000.000</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Edit className="size-4 mr-2" />
            Edit
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
