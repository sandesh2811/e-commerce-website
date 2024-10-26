type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  rating: number;
  blurredDataUrl?: string | undefined;
};

type CartItem = {
  product: Product;
  quantity: number;
  size: string;
};

type User = {
  name?: string | null | undefined;
  role?: string;
  userName?: string;
  accessToken?: string;
};
