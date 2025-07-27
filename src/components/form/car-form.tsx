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
import { createCar } from "@/lib/actions";
import { useTransition } from "react";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

export const CarForm = () => {
  const [isPending, startTransition] = useTransition();
  const { onClose } = useNewCarDialog();
  const form = useForm<z.infer<typeof carFormSchema>>({
    resolver: zodResolver(carFormSchema),
    defaultValues: {
      name: "",
      image: "",
      day_rate: "",
      month_rate: "",
    },
  });

  const onSubmit = (values: z.infer<typeof carFormSchema>) => {
    startTransition(async () => {
      await createCar({
        ...values,
        day_rate: values.day_rate.toString(),
        month_rate: values.month_rate.toString(),
      });
      onClose();
      toast.success("Success created new car");
    });
  };
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
            {isPending && <Loader2Icon className="animate-spin mr-2" />}Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};
