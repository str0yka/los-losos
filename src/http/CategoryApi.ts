import AppFetch from '@/http/index';

class CategoryApi {
  static async create(title: string, accessToken: string) {
    const response = await AppFetch.post('/category', {
      header: { authorization: accessToken },
      body: { title },
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }

  static async delete(id: number, accessToken: string) {
    const response = await AppFetch.delete('/category', {
      headers: { authorization: accessToken },
      body: { id },
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }

  static async getAll() {
    const response = await AppFetch.get('/category');

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }
}

export default CategoryApi;
