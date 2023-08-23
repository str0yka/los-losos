import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: number;
      phone: string;
      addres?: string;
      role: 'user' | 'admin';
      cartId: number;
      accessToken: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    phone: string;
    addres?: string;
    role: 'user' | 'admin';
    cartId: number;
    accessToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    phone: string;
    addres?: string;
    role: 'user' | 'admin';
    cartId: number;
    accessToken: string;
  }
}
