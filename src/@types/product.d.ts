type Product = {
  id: number;
  title: string;
  img: string;
  foods: string;
  price: number;
  weight: number;
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

type ProductCreateResponse = Product;

type ProductGetOneResponse = Product;

type ProductGetAllResponse = Array<{
  title: string;
  products: Product[];
}>;

type ProductDeleteRequest = {
  id: number;
};

type ProductDeleteResponse = Product;
