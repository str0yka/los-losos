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

  static async applyPromocode(code: string, accessToken: string) {
    const response = await AppFetch.post('/promocode/apply', {
      headers: { authorization: accessToken },
      body: { code },
    });

    return response;
  }

  static async cancelPromocode(accessToken: string) {
    const response = await AppFetch.delete('/promocode/cancel', {
      headers: { authorization: accessToken },
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

  static async confirmOrder(formData: { [key: string]: string }, accessToken: string) {
    const response = await AppFetch.post('/cart/confirm', {
      headers: { authorization: accessToken },
      body: formData,
    });

    return response;
  }
}

export default CartApi;
