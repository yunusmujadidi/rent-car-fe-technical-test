import z from "zod";

export const carFormSchema = z.object({
  name: z.string().min(1, "Name cannot be empty!"),
  image: z.url("Invalid Image URL!").min(1, "Image cannot be empty!"),
  day_rate: z.string().min(1),
  month_rate: z.string().min(1),
});

export const orderFormSchema = z.object({
  car_id: z.string().min(1, "Car selection is required!"),
  order_date: z.string().min(1, "Order date is required!"),
  pickup_date: z.string().min(1, "Pickup date is required!"),
  dropoff_date: z.string().min(1, "Dropoff date is required!"),
  pickup_location: z.string().min(1, "Pickup location is required!"),
  dropoff_location: z.string().min(1, "Dropoff location is required!"),
});
