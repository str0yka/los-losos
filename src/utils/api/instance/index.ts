type ApiRequestBaseInit = Omit<RequestInit, 'body'>;

interface ApiRequestInit extends ApiRequestBaseInit {
  body?: any
}

interface ApiConstructorParams { // TODO: accessToken
  baseURL: string
  baseInit?: ApiRequestBaseInit
  json?: boolean
}

export class API {
  readonly baseURL: string;

  readonly baseInit?: ApiRequestBaseInit;

  readonly json: boolean;

  constructor({ baseURL, baseInit, json }: ApiConstructorParams) {
    this.baseURL = baseURL;
    this.baseInit = baseInit;
    this.json = json ?? false;
  }

  async request<T>(url: string, init?: ApiRequestInit): Promise<T> {
    const headersInit = this.json ? { 'Content-Type': 'application-json' } : undefined;
    const bodyInit = this.json ? JSON.stringify(init?.body) : init?.body;

    const response = await fetch(this.baseURL + url, {
      ...this.baseInit,
      headers: {
        ...init?.headers,
        ...headersInit,
      },
      body: bodyInit,
    });

    return response.json();
  }

  async get<T>(url: string, init?: ApiRequestInit) {
    return this.request<T>(url, {
      ...init,
      method: 'GET',
    });
  }

  async post<T>(url: string, init?: ApiRequestInit) {
    return this.request<T>(url, {
      ...init,
      method: 'POST',
    });
  }

  async delete<T>(url: string, init?: ApiRequestInit) {
    return this.request<T>(url, {
      ...init,
      method: 'DELETE',
    });
  }
}
