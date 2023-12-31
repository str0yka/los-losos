import type { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

import { userApi } from '~utils/api';

export const options: NextAuthOptions = {
  providers: [
    CredentialProvider({
      name: 'Credential',
      credentials: {
        phone: {
          label: 'Ваш номер телефона:',
          type: 'text',
          placeholder: 'Введите ваш номер телефона',
          required: true,
        },
        code: {
          label: 'Код из СМС:',
          type: 'number',
          placeholder: 'Введите код из СМС',
          required: true,
        },
      },
      async authorize(credentials) {
        const body = {
          phone: credentials?.phone,
          code: credentials?.code,
        };

        const user = await userApi.login(body);

        if (user.id) {
          return {
            id: user.id.toString(),
            addres: user.addres,
            phone: user.phone,
            cartId: user.cartId,
            role: user.role,
            accessToken: user.accessToken,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        Object.assign(token, {
          phone: user.phone,
          cartId: user.cartId,
          role: user.role,
          accessToken: user.accessToken,
        });
      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        Object.assign(session.user, {
          phone: token.phone,
          cartId: token.cartId,
          role: token.role,
          accessToken: token.accessToken,
        });
      }

      return session;
    },
  },
};
