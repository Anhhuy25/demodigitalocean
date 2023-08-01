import { connectionString } from "@/constants/common";
import { MongoClient } from "mongodb";

async function handler(req, res) {
  let client;

  try {
    client = await MongoClient.connect(connectionString);
    const db = client.db(process.env.NEXT_PUBLIC_DB_DATABASE);

    try {
      const { slug } = req.query;
      const result = await db.collection("posts").find({ slug }).toArray();

      if (result.length === 0) {
        client.close();
        res.status(404).json({ code: "get_detail_posts_failed" });
        return;
      }

      res.status(200).json({
        code: "get_detail_post_success",
        post: result[0],
        ok: true,
      });
    } catch (error) {
      client.close();
      res.status(404).json({ code: "get_detail_posts_failed" });
      return;
    }
  } catch (error) {
    res.status(500).json({ code: "not_connect_database", ok: false });
    return;
  }
}

export default handler;
