import { adminAuthInstance } from "./instances/adminInstance";

/**
 * @param req next request object
 * @param res next response object
 * @returns if authenticated it returns user and if it's authrorized it returns isAuthorized is true.
 */

export function isAuthorizedToAdminApp(req, res) {
  const session = adminAuthInstance.getSession(req, res);
  if (session && session.user) {
    if (
      session.user["https://invact.com/metafolio-admin"] &&
      session.user["https://invact.com/metafolio-admin"]["id"]
    ) {
      //@ts-ignore
      req["metafolio-role"] = "admin";
      //@ts-ignore
      req["metafolio-session"] = session;
      //@ts-ignore
      req["session-id"] = session?.user?.sid;
      return {
        user: session.user,
        isAuthorized: true,
      };
    } else {
      return {
        user: session.user,
        isAuthorized: false,
      };
    }
  } else {
    return {
      user: null,
      isAuthorized: false,
    };
  }
}
