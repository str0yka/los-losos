import { API } from '~utils/api';

class PromocodeApi {
  public promocodeApi: API;

  constructor() {
    this.promocodeApi = new API({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL as string}/promocode`,
      json: true,
    });
  }

  async create(body: PromocodeCreateRequest, accessToken: string) {
    const response = await this.promocodeApi.post<ApiResponse<PromocodeCreateResponse>>('/', { // TODO: types for api
      headers: { authorization: accessToken },
      body,
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }

  async apply(body: PromocodeApplyRequest, accessToken: string) {
    const response = await this.promocodeApi.post<ApiResponse<PromocodeApplyResponse>>('/apply', {
      headers: { authorization: accessToken },
      body,
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }

  async cancel(accessToken: string) {
    const response = await this.promocodeApi.delete<ApiResponse<PromocodeCancelResponse>>('/cancel', {
      headers: { authorization: accessToken },
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }
}

export const promocodeApi = new PromocodeApi();
