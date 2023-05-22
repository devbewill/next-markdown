export default function handler(req, res) {
  const body = req.body;
  console.log("body: ", body);

  if (!body.name || !body.email) {
    return res.status(400).json({ data: "name or email non found" });
  }

  // for datome needs https://trial.datome.io/api/signup/

  res.status(200).json({ data: `${body.name} ${body.email}` });
}
