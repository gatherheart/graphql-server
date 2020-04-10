import { prisma } from '../../../../generated/prisma-client';

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { username, email, bio = '', phone, postsCount = 0 } = args;
      const user = await prisma.createUser({
        username,
        email,
        bio,
        phone,
        postsCount,
      });
      return user;
    },
  },
};
