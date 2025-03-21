"use server";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

// export async function getLatestProducts() {
//   const data = await prisma.product.findMany({
//     take: LATEST_PRODUCTS_LIMIT,
//     orderBy: { createdAt: "desc" },
//   });

//   return convertToPlainObject(data);
// }

// //get single products by its slug

// export async function getProductsBySlug(slug: string) {
//   return await prisma.product.findFirst({
//     where: { slug: slug },
//   });
// }


export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  // Ensure both price and rating are converted to numbers
  const formattedData = data.map((product) => ({
    ...product,
    price: Number(product.price), // Convert price to number
    rating: Number(product.rating), // Convert rating to number (FIX)
  }));

  return convertToPlainObject(formattedData);
}


export async function getProductsBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}