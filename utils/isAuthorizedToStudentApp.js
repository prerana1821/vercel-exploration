import { studentAuthInstance } from "./instances/studentInstance";

/**
 * @param req next request object
 * @param res next response object
 * @returns if authenticated it returns user and if it's authrorized it returns isAuthorized is true.
 */

export function isAuthorizedToStudentApp(req, res) {
  const session = studentAuthInstance.getSession(req, res);
  if (session && session.user) {
    if (
      session.user["https://invact.com/metafolio-student"] &&
      session.user["https://invact.com/metafolio-student"]["id"]
    ) {
      //@ts-ignore
      req["metafolio-role"] = "student";
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
