import axios from "axios";
// TODO: Setup an API to fetch all projects from GraphCMS
export default async (req: any, res: any) => {
  const { method } = req;

  axios.defaults.baseURL = process.env.SERVER_REMOTE;

  switch (method) {
    case "POST":
      {
        const result = await axios.post("/", {
          query: "{projects{id,title,projectThumbnail{url},breif,visible}}",
        });
        res.json(result.data);
      }
      break;
    case "GET": {
      res.status(405).json({ message: "Wrong request method" });
    }
    default: {
      res.status(405).json({ message: "Wrong request method" });
    }
  }
};
