import * as productService from "../services/product.service.js";

export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProductService(req.body);
    return res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProductsService();

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const allowedFields = ["name", "price", "featured", "rating", "company"];
    const updateData = {};

    for (const key of allowedFields) {
      if (req.body[key] !== undefined) {
        updateData[key] = req.body[key];
      }
    }

    const updatedProduct = await productService.updateProductService(
      productId,
      updateData
    );

    return res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    const status =
      error.message === "Product not found" ? 404 : 400;

    return res.status(status).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    await productService.deleteProductService(productId);

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    const status =
      error.message === "Product not found" ? 404 : 400;

    return res.status(status).json({
      success: false,
      message: error.message,
    });
  }
};


export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await productService.getFeaturedProductsService();

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getProductsByPrice = async (req, res) => {
  try {
    const { price } = req.query;

    const products = await productService.getProductsByPriceService(price);
    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


export const getProductsByRating = async (req, res) => {
  try {
    const { rating } = req.query;

    const products = await productService.getProductsByRatingService(rating);

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};