// import Product
import dbConnect from "@/db/connect.js";
import Product from "../../../db/Product";

// import { products } from "../../../lib/products";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    response.status(200).json(products);
  }
}
