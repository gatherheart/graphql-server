"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_client_1 = require("../../../../generated/prisma-client");
exports.default = {
    Mutation: {
        createAccount: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { username, email, bio = '', phone, postsCount = 0 } = args;
            const user = yield prisma_client_1.prisma.createUser({
                username,
                email,
                bio,
                phone,
                postsCount,
            });
            return user;
        }),
    },
};
//# sourceMappingURL=createAccount.resolvers.js.map