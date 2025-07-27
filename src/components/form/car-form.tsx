"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { useNewCarDialog } from "@/hooks/use-car";
import { carFormSchema } from "@/lib/zod-schema";
import { Loader2Icon } from "lucide-react";
import { Car } from "@/lib/types";

interface CarFormProps {
  car?: Car;
  onSubmit: (values: z.infer<typeof carFormSchema>) => void;
  isPending: boolean;
}
export const CarForm = ({ car: car, onSubmit, isPending }: CarFormProps) => {
  const { onClose } = useNewCarDialog();
  const form = useForm<z.infer<typeof carFormSchema>>({
    resolver: zodResolver(carFormSchema),
    defaultValues: {
      name: car?.name || "",
      image: car?.image || "",
      day_rate: car?.day_rate || "",
      month_rate: car?.month_rate || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car Name</FormLabel>
              <FormControl>
                <Input placeholder="Lamborghini Aventador" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Car Image URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://example.com/car-image.jpg"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="day_rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Day Rate</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Rp.300.000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="month_rate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Month Rate</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Rp.10.000.000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => onClose()}
            variant="outline"
            disabled={isPending}
          >
            Cancel
          </Button>
          <Button disabled={isPending} type="submit">
            {isPending && <Loader2Icon className="animate-spin mr-2" />}
            {car ? "Edit Car" : "Create Car"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
