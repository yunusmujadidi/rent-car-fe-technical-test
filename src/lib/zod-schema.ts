import z from "zod";

export const carFormSchema = z.object({
  name: z.string().min(1, "Name cannot be empty!"),
  image: z.url("Invalid Image URL!").min(1, "Image cannot be empty!"),
  day_rate: z.string().min(1),
  month_rate: z.string().min(1),
});
