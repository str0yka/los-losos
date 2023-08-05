import AppFetch from '.';

class UserApi {
  static async login(body: {
    phone?: string,
    code?: string,
  }) {
    const response = await AppFetch.post('/user/login', { body });
    return response;
  }
}

export default UserApi;
