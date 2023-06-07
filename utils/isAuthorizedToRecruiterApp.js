export async function isAuthorizedToRecruiterApp(req) {
  //@ts-ignore
  req["metafolio-role"] = "recruiter";

  // Authentication not available for Recruiter App, so dummy user is returned
  return {
    user: { name: "Recruiter Dummy" },
    isAuthorized: true,
  };
}
