// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("SSR - API Routes - in fetch");

  if (req.method === "GET") {
    res.status(200).json({ status: "200", message: "ok" });
  } else {
    console.log(req.body);
    res.status(405).json({ status: "405", message: "Method not allowed" });
  }
}
