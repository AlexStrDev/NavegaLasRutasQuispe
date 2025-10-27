export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  stock: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Laptop HP Pavilion",
    category: "laptops",
    price: 899.99,
    description: "Laptop potente con procesador Intel Core i7, 16GB RAM, 512GB SSD. Perfecta para trabajo y entretenimiento.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    stock: 15
  },
  {
    id: "2",
    name: "MacBook Air M2",
    category: "laptops",
    price: 1299.99,
    description: "MacBook Air con chip M2, 8GB RAM, 256GB SSD. Delgada, ligera y potente.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    stock: 8
  },
  {
    id: "3",
    name: "iPhone 15 Pro",
    category: "smartphones",
    price: 1099.99,
    description: "iPhone 15 Pro con chip A17 Pro, cámara de 48MP y pantalla Super Retina XDR.",
    image: "https://images.unsplash.com/photo-1592286927505-50fee66f8ac2?w=400&h=300&fit=crop",
    stock: 20
  },
  {
    id: "4",
    name: "Samsung Galaxy S24",
    category: "smartphones",
    price: 899.99,
    description: "Samsung Galaxy S24 con tecnología AI, cámara de 200MP y batería de larga duración.",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
    stock: 12
  },
  {
    id: "5",
    name: "iPad Pro 12.9",
    category: "tablets",
    price: 1199.99,
    description: "iPad Pro con chip M2, pantalla Liquid Retina XDR y compatibilidad con Apple Pencil.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
    stock: 10
  },
  {
    id: "6",
    name: "Samsung Galaxy Tab S9",
    category: "tablets",
    price: 799.99,
    description: "Tablet premium con pantalla AMOLED, S Pen incluido y resistencia al agua.",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop",
    stock: 7
  },
  {
    id: "7",
    name: "AirPods Pro",
    category: "accesorios",
    price: 249.99,
    description: "AirPods Pro con cancelación activa de ruido y audio espacial.",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=300&fit=crop",
    stock: 25
  },
  {
    id: "8",
    name: "Sony WH-1000XM5",
    category: "accesorios",
    price: 399.99,
    description: "Auriculares premium con la mejor cancelación de ruido del mercado.",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=300&fit=crop",
    stock: 18
  }
];