type Cart = {
  id: number;
  user?: User;
  userId?: number;
  productsInCart: ProductsInCart[];
  promocode?: Promocode;
  promocodeId?: number;
  order?: Order;
  orderId?: number;
};

type ProductInCart = {
  id: number;
  count: number;
  product: Product;
  productId: number;
  cart: Cart;
  cartId: number;
};

type CartAddItemToCartRequest = {
  productId: number;
};

type CartAddItemToCartResponse = {
  userId: null | number;
  token: null | string;
  product: Omit<Product, 'category'>;
  count: number;
};

type CartRemoveItemFromCartRequest = {
  productId: number;
};

type CartRemoveItemFromCartResponse = {
  userId: null | number;
  token: null | string;
  product: Omit<Product, 'category'>;
  count: number;
};

type CartRemoveAllProductsFromCartResponse = {
  success: true;
};

type CartRemoveProductFromCartRequest = {
  productId: number;
};

type CartRemoveProductFromCartResponse = {
  success: true;
};

type CartGetAllResponse = {
  productsInCart: Array<{
    product: Omit<Product, 'category'>;
    count: number;
  }>;
  promocode?: Omit<Promocode, 'cart'>;
};

type CartConfirmRequest = {
  name: string;
  phone: string;
  street: string,
  home: string,
  building?: string,
  entrance?: string,
  floor?: string,
  apartment?: string,
  addressComment?: string,
  orderComment?: string,
};

type CartConfirmResponse = {
  success: true;
  prevCartId: number;
  newCartId: number;
};
