import { isAuthorizedToApp } from "../../utils/isAuthorizedToApp";

export default async function handler(req, res) {
  const { isAuthorized, user } = await isAuthorizedToApp(req, res);
  if (user) {
    if (isAuthorized) {
      res.status(200).send(user);
    } else {
      res.status(403).send({ error: "Not Authorized" });
    }
  } else {
    res.status(401).send({ erorr: "Not Authenticated" });
  }
}
