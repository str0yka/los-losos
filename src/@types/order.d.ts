type Order = {
  id: number;
  status: | 'accepted'
          | 'inWork'
          | 'enRoute'
          | 'delivered'
          | 'canceled';
  whenDelivered?: Date;
  cart: Cart;
  cartId: number;
  user?: User;
  userId?: number;
};

type OrderGetAllResponse = Array<{
  status: Order['status'];
  cart: {
    id: number;
    productsInCart: Array<{
      product: {
        title: string;
      };
      count: number;
    }>
  }
}>;
