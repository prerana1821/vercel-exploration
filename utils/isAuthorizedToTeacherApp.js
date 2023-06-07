import { teacherAuthInstance } from "./instances/teacherInstance";

/**
 * @param req next request object
 * @param res next response object
 * @returns if authenticated it returns user and if it's authrorized it returns isAuthorized is true.
 */

export function isAuthorizedToTeacherApp(req, res) {
  const session = teacherAuthInstance.getSession(req, res);
  if (session && session.user) {
    if (
      session.user["https://invact.com/metafolio-teacher"] &&
      session.user["https://invact.com/metafolio-teacher"]["id"]
    ) {
      //@ts-ignore
      req["metafolio-role"] = "teacher";
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
