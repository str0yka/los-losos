import { API } from '~utils/api';

class CategoryApi {
  public categoryApi: API;

  constructor() {
    this.categoryApi = new API({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL as string}/category`,
      json: true,
    });
  }

  async create(body: CategoryCreateRequest, accessToken: string) {
    const response = await this.categoryApi.post<ApiResponse<CategoryCreateResponse>>('/', {
      headers: { authorization: accessToken },
      body,
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }

  async delete(body: CategoryDeleteRequest, accessToken: string) {
    const response = await this.categoryApi.delete<ApiResponse<CategoryDeleteResponse>>('/', { // TODO: api types
      headers: { authorization: accessToken },
      body,
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }
}

export const categoryApi = new CategoryApi();
