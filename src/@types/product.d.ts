type Product = {
  id: number;
  title: string;
  img: string;
  foods: string;
  price: number;
  weight: number;
  category: Category;
  categoryId: number;
};

type ProductCreateRequest = {
  title: string;
  img: File;
  foods: string[];
  price: number;
  weight: number;
  categoryId: number;
};

type ProductCreateResponse = Omit<Product, 'category'>;

type ProductGetOneResponse = Omit<Product, 'category'>;

type ProductGetAllResponse = Array<{
  title: string;
  products: Omit<Product, 'category'>[];
}>;

type ProductDeleteRequest = {
  id: number;
};

type ProductDeleteResponse = Omit<Product, 'category'>;
