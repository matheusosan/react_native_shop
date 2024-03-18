import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  sizes: string[];
  images: string[];
}

export const fetchPosts = async () => {
  const response = await axios.get<Product[]>(
    "http://localhost:3000/product/all"
  );
  return response.data;
};

export const fetchPostById = async (postId: string) => {
  const response = await axios.get<Product>(
    `http://localhost:3000/product/${postId}`
  );
  return response.data;
};
