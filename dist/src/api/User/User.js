"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    User: {
        isSelf: (parent, _, { request }) => {
            console.log(parent);
            return true;
        }
    }
};
//# sourceMappingURL=User.js.map