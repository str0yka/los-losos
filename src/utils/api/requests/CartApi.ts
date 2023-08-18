import { API } from '~utils/api';

class CartApi {
  public cartApi: API;

  constructor() {
    this.cartApi = new API({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL as string}/cart`,
      json: true,
    });
  }

  async removeAllProducts(accessToken: string) {
    const response = await this.cartApi.delete<ApiResponse<CartRemoveAllProductsFromCartResponse>>('/all', {
      headers: { authorization: accessToken },
    });

    if ('message' in response) {
      throw new Error();
    }

    return response;
  }

  async removeProduct(body: CartRemoveProductFromCartRequest, accessToken: string) {
    const response = await this.cartApi.delete<ApiResponse<CartRemoveProductFromCartResponse>>('/one', {
      headers: { authorization: accessToken },
      body,
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }

  async removeItem(body: CartRemoveItemFromCartRequest, accessToken: string) {
    const response = await this.cartApi.delete<ApiResponse<CartRemoveItemFromCartResponse>>('/', {
      headers: { authorization: accessToken },
      body,
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }

  async addItem(body: CartAddItemToCartRequest, accessToken: string) {
    const response = await this.cartApi.post<ApiResponse<CartAddItemToCartResponse>>('/', {
      headers: { authorization: accessToken },
      body,
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }

  async getAll(accessToken: string) {
    const response = await this.cartApi.get<ApiResponse<CartGetAllResponse>>('/', {
      headers: { authorization: accessToken },
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }

  async confirm(body: CartConfirmRequest, accessToken: string) {
    const response = await this.cartApi.post<ApiResponse<CartConfirmResponse>>('/', {
      headers: { authorization: accessToken },
      body,
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }
}

export const cartApi = new CartApi();
