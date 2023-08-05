interface CategoryCreateResponse {
  id: number
  title: string
}

type CategoryItem = {
  title: string;
  products: Product[];
};

interface Product {
  id: number;
  title: string;
  img: string;
  foods: string;
  price: number;
  weight: number;
  categoryId: number;
}

type ProductInCart = {
  count: number;
  product: Product;
};

interface User {
  id: number;
  phone: string;
  addres: string;
  password: null;
  role: 'user' | 'admin';
  cartId: number;
}

type Promocode = {
  id: number;
  code: string;
  name?: string;
  text?: string;
  discountType: 'fix' | 'percentage';
  value: number;
  expireType: 'count' | 'date' | 'infinity'
  date?: Date
  count?: number
  counter?: number
};
