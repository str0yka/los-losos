import AppFetch from '@/http/index';
import { API_URL } from '@/utils';

class ProductApi {
  static async getProducts() {
    const response = await AppFetch.get('/product');

    return response;
  }

  static async create(
    product: Omit<Product, 'id' | 'foods' | 'img'> & { foods: string, img: File },
    accessToken: string,
  ) {
    const formData = new FormData();

    for (const key in product) {
      // @ts-ignore
      formData.append(key, product[key]);
    }

    console.log(product.foods, formData.get('foods'));

   const response = await fetch(`${API_URL}/product`, {
     method: 'POST',
     headers: { authorization: accessToken },
     body: formData,
   });

   if ('message' in response) {
     throw new Error(response.message);
   }

   return response;
  }
}

export default ProductApi;
