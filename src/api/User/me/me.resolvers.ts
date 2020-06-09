import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        me: async (_, args, { request }) => {
            //const { user } = request;
            return await prisma.user({ id: args.id });
        }
    }
};