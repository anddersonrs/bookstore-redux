export type IProduct = {
  id: number;
  title: string;
  price: number;
};

export type ICartItem = {
  product: IProduct;
  quantity: number;
};

export type ICartState = {
  items: ICartItem[];
};
