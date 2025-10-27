import { products, type Product } from "../data/products";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (categoryId?: string): Promise<Product[]> => {
  await delay(1000);   
  if (categoryId) {
    return products.filter((product) => product.category === categoryId);
  }
  
  return products;
};

export const getProductById = async (itemId: string): Promise<Product | undefined> => {
  await delay(800);   
  return products.find((product) => product.id === itemId);
};

export const getCategories = (): string[] => {
  const categories = products.map((product) => product.category);
  return Array.from(new Set(categories));
};