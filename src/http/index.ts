import { API_URL } from '@/utils';

class AppFetch {
  static async fetchData(
    method: 'POST' | 'GET' | 'PATCH' | 'PUT' | 'DELETE',
    url: string,
    init?: RequestInit,
  ) {
    const data = await fetch(API_URL + url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...init?.headers,
      },
      body: JSON.stringify(init?.body),
    });
    return data.json();
  }

  static async get(url: string, init?: any) {
    const response = await this.fetchData('GET', url, init);
    return response;
  }

  static async post(url: string, init?: any) {
    const response = await this.fetchData('POST', url, init);
    return response;
  }

  static async delete(url: string, init?: any) {
    const response = await this.fetchData('DELETE', url, init);
    return response;
  }
}

export default AppFetch;
