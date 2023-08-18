import { API } from '~utils/api';

class OrderApi {
  public orderApi: API;

  constructor() {
    this.orderApi = new API({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL as string}/cart`,
      json: true,
    });
  }

  async getAll(accessToken: string) {
    const response = await this.orderApi.get<ApiResponse<OrderGetAllResponse>>('/', {
      headers: { authorization: accessToken },
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }
}

export const orderApi = new OrderApi();
