import AppFetch from '.';

class CartApi {
  static async deleteAllItems(accessToken: string) {
    const response = await AppFetch.delete('/cart/all', {
      headers: { authorization: accessToken },
    });

    return response;
  }

  static async deleteItem(id: number, accessToken: string) {
    const response = await AppFetch.delete('/cart/one', {
      headers: { authorization: accessToken },
      body: { id },
    });

    return response;
  }

  static async delete(id: number, accessToken: string) {
    const response = await AppFetch.delete('/cart', {
      headers: { authorization: accessToken },
      body: { id },
    });

    return response;
  }

  static async add(id: number, accessToken: string) {
    const response = await AppFetch.post('/cart', {
      headers: { authorization: accessToken },
      body: { id },
    });

    return response;
  }

  static async getAll(accessToken?: string) {
    const init = accessToken
      ? { headers: { authorization: accessToken } }
      : undefined;

    const response = await AppFetch.get('/cart', init);

    return response;
  }
}

export default CartApi;