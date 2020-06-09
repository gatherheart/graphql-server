import { prisma } from "../../../generated/prisma-client";
export default {
    User: {
        isSelf: (parent, _, { request }) => {
            console.log(parent)
            return true;
        }
    }
};
