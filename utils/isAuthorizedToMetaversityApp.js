import { checkAccessToken, getPerssionsArray } from "./isValidAccessToken";
import { runMiddleware } from "./runMiddleware";

export async function isAuthorizedToMetaversityApp(req, res) {
  try {
    await runMiddleware(req, res, checkAccessToken);
    const permissions = getPerssionsArray(
      req.headers.authorization?.split("Bearer ")[1]
    );
    if (req.method === "GET" || req.method == "DELETE") {
      return {
        user: { id: req.query.identity_user_id, role: req.query.role },
        isAuthorized: true,
        permissions,
      };
    } else {
      return {
        user: {
          id: req.body.identity_user_id,
          role: req.body.role,
        },
        isAuthorized: true,
        permissions,
      };
    }
  } catch (e) {
    return {
      user: null,
      isAuthorized: false,
      Permissions: undefined,
    };
  }
}
