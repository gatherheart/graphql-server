"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const graphql_tools_1 = require("graphql-tools");
const merge_graphql_schemas_1 = require("merge-graphql-schemas");
const allTypes = merge_graphql_schemas_1.fileLoader(path.join(__dirname, '/api/**/*.graphql'));
const allResolvers = merge_graphql_schemas_1.fileLoader(path.join(__dirname, '/api/**/*.ts'));
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: merge_graphql_schemas_1.mergeTypes(allTypes),
    resolvers: merge_graphql_schemas_1.mergeResolvers(allResolvers),
});
exports.default = schema;
//# sourceMappingURL=schema.js.map