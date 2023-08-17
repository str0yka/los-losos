import AppFetch from '@/http';

interface CreatePromocodeForm {
  code: string
  discountType: 'percentage' | 'fix'
  value: number
  name?: string
  text?: string
  expireType: 'count' | 'infinity' | 'date'
  count?: number
  date?: Date
}

class PromocodeApi {
  static async create(promocode: CreatePromocodeForm, accessToken: string) {
    const response = await AppFetch.post('/promocode', {
      headers: { authorization: accessToken },
      body: promocode,
    });

    if ('message' in response) {
      throw new Error(response.message);
    }

    return response;
  }
}

export default PromocodeApi;
