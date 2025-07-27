"use server";

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
