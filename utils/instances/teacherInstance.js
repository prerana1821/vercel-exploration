import { initAuth0 } from "@auth0/nextjs-auth0";

const teacherAuthInstance = initAuth0({
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.TEACHER_URL,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  clientID: process.env.TEACHER_AUTH0_CLIENT_ID,
  clientSecret: process.env.TEACHER_AUTH0_CLIENT_SECRET,
  auth0Logout: true,
  httpTimeout: 20000,
  session: {
    cookie: {
      domain: process.env.NODE_ENV !== "development" ? ".invact.com" : undefined,
      path: "/",
    },
    absoluteDuration: 1604800, // we don't user to logged out after some time because we are using refresh-token mechanism.
    name: "invact_teacher",
  },
});

export { teacherAuthInstance };
