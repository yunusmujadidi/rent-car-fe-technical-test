"use server";

import z from "zod";
import { revalidatePath } from "next/cache";

import { carFormSchema, orderFormSchema } from "@/lib/zod-schema";

// get cars
export async function getCars({
  search = "",
  order = "desc",
  sortBy = "id",
}: {
  search?: string;
  order?: "asc" | "desc";
  sortBy?: string;
}) {
  const url = new URL(`${process.env.API_BASE_URL}/cars`);

  if (search) url.searchParams.append("search", search);
  if (sortBy) url.searchParams.append("sortBy", sortBy);
  if (order) url.searchParams.append("order", order);

  try {
    const res = await fetch(url.toString(), { cache: "no-store" });
    const text = await res.text();

    if (text.trim().toLowerCase() === "not found") {
      return [];
    }

    if (!text.trim()) {
      return [];
    }

    const data = JSON.parse(text);

    if (!Array.isArray(data)) {
      return [];
    }

    return data;
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

// get orders
export async function getOrders() {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/orders`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch orders");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}

// create order
export async function createOrder(values: z.infer<typeof orderFormSchema>) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/orders`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error("Failed to create order");
    }

    revalidatePath("/orders");
    return res.json();
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}

// edit order
export async function editOrder(
  id: string,
  values: z.infer<typeof orderFormSchema>
) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/orders/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      throw new Error("Failed to update order");
    }

    revalidatePath("/orders");
    return res.json();
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
}

// delete order
export async function deleteOrder(id: string) {
  try {
    const res = await fetch(`${process.env.API_BASE_URL}/orders/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete order");
    }

    revalidatePath("/orders");
    return res.json();
  } catch (error) {
    console.error("Error deleting order:", error);
    throw error;
  }
}
