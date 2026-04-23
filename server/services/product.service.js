export const createProductService = async (data) => {
  const { productId, name, price, featured = false, rating, company } = data;
  if (!productId || !name || price === undefined || !company) {
    throw new Error("Missing required fields");
  }
  if (typeof price !== "number" || price < 0) {
    throw new Error("Invalid price");
  }

  const product = await Product.create({
    productId,
    name,
    price,
    featured,
    rating,
    company,
    createdAt: new Date(),
  });
  return product;
};

export const getAllProductsService = async () => {
  const products = await Product.find({}).sort({ createdAt: -1 }).lean();
  return products;
};

import mongoose from "mongoose";
import Product from "../model/product.model.js";

export const updateProductService = async (productId, updateData) => {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new Error("Invalid product ID");
  }
  if (updateData.price !== undefined) {
    if (typeof updateData.price !== "number" || updateData.price < 0) {
      throw new Error("Invalid price");
    }
  }

  if (updateData.rating !== undefined) {
    if (updateData.rating < 0 || updateData.rating > 5) {
      throw new Error("Invalid rating");
    }
  }
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    updateData,
    {
      new: true,
      runValidators: true,
    },
  );

  if (!updatedProduct) {
    throw new Error("Product not found");
  }

  return updatedProduct;
};

export const deleteProductService = async (productId) => {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new Error("Invalid product ID");
  }

  const deletedProduct = await Product.findByIdAndDelete(productId);

  if (!deletedProduct) {
    throw new Error("Product not found");
  }

  return deletedProduct;
};
export const getFeaturedProductsService = async () => {
  const products = await Product.find({ featured: true })
    .sort({ createdAt: -1 })
    .lean();

  return products;
};
export const getProductsByPriceService = async (price) => {
  const parsedPrice = Number(price);

  if (!price || isNaN(parsedPrice)) {
    throw new Error("Invalid price value");
  }

  const products = await Product.find({
    price: { $lt: parsedPrice },
  })
    .sort({ price: 1 })
    .lean();

  return products;
};
export const getProductsByRatingService = async (rating) => {
  const parsedRating = Number(rating);

  if (!rating || isNaN(parsedRating)) {
    throw new Error("Invalid rating value");
  }
  const products = await Product.find({
    rating: { $gte: parsedRating },
  })
    .sort({ rating: -1 })
    .lean();

  return products;
};
