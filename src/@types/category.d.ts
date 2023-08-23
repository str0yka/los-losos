type Category = {
  id: number;
  title: string;
  products: Product[]
};

type CategoryCreateRequest = {
  title: string;
};

type CategoryCreateResponse = {
  id: number;
  title: string;
};

type CategoryDeleteRequest = {
  id: number;
};

type CategoryDeleteResponse = {
  id: number;
  title: string;
};

type CategoryGetAllResponse = Array<{
  id: number;
  title: string;
}>;
