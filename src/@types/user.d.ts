type User = {
  id: number;
  password?: string;
  phone?: string;
  addres?: string;
  role: 'user' | 'admin';
  cart: Cart;
  cartId: number;
  orders: Order[];
};

type UserLoginRequest = {
  phone?: string;
  code?: string;
};

type UserLoginResponse = {
  id: number;
  phone: string;
  addres?: string;
  role: 'user' | 'admin';
  cartId: number;
  accessToken: string;
};
