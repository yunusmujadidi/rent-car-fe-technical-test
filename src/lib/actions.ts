"use server";

import z from "zod";
import { revalidatePath } from "next/cache";

import { carFormSchema } from "@/lib/zod-schema";

// get cars
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

// create car
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

// edit car
export async function editCar(
  id: string,
  values: z.infer<typeof carFormSchema>
) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/cars/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error("Failed to update car");
    }

    revalidatePath("/cars");
    return res.json();
  } catch (error) {
    console.error("Error updating car:", error);
    throw error;
  }
}

// delete car
export async function deleteCar(id: string) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/cars/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id),
    });

    if (!res.ok) {
      throw new Error("Failed to delete car");
    }
    revalidatePath("/cars");
    return res.json();
  } catch (error) {
    console.error("Error deleting car:", error);
    throw error;
  }
}
