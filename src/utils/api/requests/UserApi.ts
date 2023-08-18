import { API } from '~utils/api';

class UserApi {
  userApi: API;

  constructor() {
    this.userApi = new API({
      baseURL: `${process.env.NEXT_PUBLIC_API_URL as string}/user`,
      json: true,
    });
  }

  async login(body: UserLoginRequest) {
    const response = await this.userApi.post<ApiResponse<UserLoginResponse>>('/login', { body });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }
}

export const userApi = new UserApi();
