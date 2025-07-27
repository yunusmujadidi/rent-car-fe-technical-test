"use server";

import z from "zod";
import { carFormSchema } from "./zod-schema";
import { revalidatePath } from "next/cache";

export async function getCars() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/cars`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch cars");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
}

export async function createCar(values: z.infer<typeof carFormSchema>) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/cars`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error("Failed to create car");
    }

    revalidatePath("/cars");
    return res.json();
  } catch (error) {
    console.error("Error fetching cars:", error);
    throw error;
  }
}
