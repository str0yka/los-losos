import { API } from '~utils/api';

class ProductApi {
  productApiJson: API;

  productApiXml: API;

  constructor() {
    this.productApiJson = new API({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL as string}/product`,
      json: true,
    });

    this.productApiXml = new API({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL as string}/product`,
      json: false,
    });
  }

  async getAll() {
    const response = await this.productApiJson.get<ApiResponse<ProductGetAllResponse>>('/', {
      next: {
        revalidate: 60,
      },
    });
    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }

  async create(product: ProductCreateRequest, accessToken: string) {
    const formData = new FormData();

    for (const key in product) {
      if (key in product) {
        formData.append(key, product[key]);
      }
    }

    formData.set('foods', JSON.stringify(product.foods));

   const response = await this.productApiXml.post<ApiResponse<ProductCreateResponse>>('/', {
    headers: { authorization: accessToken },
    body: formData,
   });

   if ('message' in response) {
     throw new Error(response.message);
   }

   return response;
  }

  async delete(body: ProductDeleteRequest, accessToken: string) {
    const response = await this.productApiJson.delete<ApiResponse<ProductDeleteResponse>>('/', {
      headers: { authorization: accessToken },
      body,
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }
}

export const productApi = new ProductApi();
