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

type CartInteractionResponse = {
  isAuthorize: boolean;
  token: null | string;
} & ProductInCart;

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
  type: 'fix' | 'percentage';
  value: number;
  name: string | null;
  text: string | null;
};

interface InputFormProps {
  input: {
    name: string,
    type:
      | {
      text: {
        min: number,
        max: number,
      }
    } | {
      file: {
        accept: 'image',
      }
    },
    startValue?: string,
    placeholder?: string,
    required?: boolean
  }
}
