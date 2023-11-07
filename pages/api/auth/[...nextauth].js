import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';
import API_ROUTES from '../../../routes/apiRoutes';
import login from './login';
import signUp from './signup';

const authOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        console.log({credentials})

        if (credentials.action === 'login') {
          const user = await login(credentials);
          return user;
        } else if (credentials.action === 'signup') {
          const user = await signUp(credentials);
          return user;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    newUser: '/signup',
  },
  callbacks: {
    async jwt(token, user) {
      // Сохраняем email пользователя в токене
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session(session, token) {
      // Сохраняем email пользователя в сессии
      if (token && token.email) {
        session.user.email = token.email;
      }
      return session;
    },
  },
};

export default (req, res) => NextAuth(req, res, authOptions);
