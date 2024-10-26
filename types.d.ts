// Product type

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  rating: number;
  blurredDataUrl?: string | undefined;
};

// Cart item type

type CartItem = {
  product: Product;
  quantity: number;
  size: string;
};

// For authentication user type

type User = {
  name?: string | null | undefined;
  role?: string;
  userName?: string;
  accessToken?: string;
};

// Single product product prop type

type ProductPropType = {
  products: Product[];
};

// New arrival prop type

type NewArrivalProps = {
  newArrival: Product;
};

// Featured Section prop type

type ProductProps = {
  product: Product;
};

// Cart item prop type

type CartItemPropType = {
  item: CartItem;
};

// Add to cart button prop type

type PropsType = {
  product: Product;
  size: string;
};
