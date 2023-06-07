import { isAuthorizedToAdminApp } from "./isAuthorizedToAdminApp";
import { isAuthorizedToRecruiterApp } from "./isAuthorizedToRecruiterApp";
import { isAuthorizedToStudentApp } from "./isAuthorizedToStudentApp";
import { isAuthorizedToTeacherApp } from "./isAuthorizedToTeacherApp";

export async function isAuthorizedToApp(req, res) {
  if (req.headers["x-metafolio-application"] === "metafolio-admin") {
    return isAuthorizedToAdminApp(req, res);
  } else if (req.headers["x-metafolio-application"] === "metafolio-teacher") {
    return isAuthorizedToTeacherApp(req, res);
  } else if (req.headers["x-metafolio-application"] === "metafolio-student") {
    return isAuthorizedToStudentApp(req, res);
  } else if (req.headers["x-metafolio-application"] === "metafolio-recruiter") {
    return isAuthorizedToRecruiterApp(req);
  } else {
    return { user: null, isAuthorized: false };
  }
}
