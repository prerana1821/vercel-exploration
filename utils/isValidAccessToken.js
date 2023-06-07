import jwt from "express-jwt";
import jwks from "jwks-rsa";
import { decode } from "jsonwebtoken";

export let checkAccessToken = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 500,
    jwksUri: `${process.env.AUTH0_ISSUER_BASE_URL}/.well-known/jwks.json`,
  }),
  audience: "RBAC",
  issuer: `${process.env.AUTH0_ISSUER_BASE_URL}/`,
  algorithms: ["RS256"],
});

export function getPerssionsArray(token) {
  if (typeof token === "string") {
    const x = decode(token);
    //@ts-ignore
    if (x && Array.isArray(x["permissions"])) {
      //@ts-ignore
      return x["permissions"];
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}
