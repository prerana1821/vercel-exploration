import { initAuth0 } from "@auth0/nextjs-auth0";

const studentAuthInstance = initAuth0({
  secret: process.env.AUTH0_SECRET,
  baseURL: process.env.STUDENT_URL,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  clientID: process.env.STUDENT_AUTH0_CLIENT_ID,
  clientSecret: process.env.STUDENT_AUTH0_CLIENT_SECRET,
  idpLogout: true,
  auth0Logout: true,
  httpTimeout: 20000,
  session: {
    cookie: {
      domain: process.env.NODE_ENV !== "development" ? ".invact.com" : undefined,
      path: "/",
    },
    absoluteDuration: 1604800, // we don't user to logged out after some time because we are using refresh-token mechanism.
    name: "invact_lms_metaversity",
  },
});

export { studentAuthInstance };
