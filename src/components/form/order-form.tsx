"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { orderFormSchema } from "@/lib/zod-schema";
import { CalendarIcon, Loader2Icon } from "lucide-react";
import { Order, Car } from "@/lib/types";
import { getCars } from "@/lib/actions";
import { cn } from "@/lib/utils";

interface OrderFormProps {
  order?: Order;
  onSubmit: (values: z.infer<typeof orderFormSchema>) => void;
  isPending: boolean;
}

export const OrderForm = ({ order, onSubmit, isPending }: OrderFormProps) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoadingCars, setIsLoadingCars] = useState(true);

  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      car_id: order?.car_id || "",
      pickup_date: order?.pickup_date || "",
      dropoff_date: order?.dropoff_date || "",
      pickup_location: order?.pickup_location || "",
      dropoff_location: order?.dropoff_location || "",
    },
  });

  // fetch cars for the dropdown
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setIsLoadingCars(true);
        const data = await getCars({});
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setIsLoadingCars(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="car_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Car</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      className="w-full flex"
                      placeholder={
                        isLoadingCars
                          ? "Loading cars..."
                          : cars.length === 0
                          ? "No cars available"
                          : "Select a car"
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cars.length > 0
                    ? cars.map((car) => (
                        <SelectItem key={car.id} value={car.id}>
                          {car.name}
                        </SelectItem>
                      ))
                    : null}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pickup_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Pickup Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) =>
                      field.onChange(date?.toISOString().split("T")[0])
                    }
                    disabled={(date) => date < new Date()}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dropoff_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Dropoff Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(new Date(field.value), "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) =>
                      field.onChange(date?.toISOString().split("T")[0])
                    }
                    disabled={(date) => date < new Date()}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pickup_location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pickup Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter pickup location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dropoff_location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dropoff Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter dropoff location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <Button type="submit" disabled={isPending} className="flex-1">
            {isPending && <Loader2Icon className="w-4 h-4 animate-spin mr-2" />}
            {order ? "Update Order" : "Create Order"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
