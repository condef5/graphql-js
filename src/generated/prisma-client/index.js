"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  endpoint: "https://eu1.prisma.sh/davisconfab/hacker-news/dev",
  secret: "mysecret123"
});
exports.prisma = new exports.Prisma();
