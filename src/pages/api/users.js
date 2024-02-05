import { randomUsers } from "@/utils/dummyUsers";

// import { randomUsers } from "../../utils/dummyUsers";

const handler = (req, res) => {
  res.status(200).json(randomUsers);
  res.setHeader("Access-Control-Allo-Orign", "*");
};

export default handler;
