import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("bgmi_tournaments");
    const collections = await db.listCollections().toArray();

    res.status(200).json({ success: true, collections });
  } catch (err) {
    console.error("TEST DB ERROR:", err);
    res.status(500).json({ success: false, error: err.message });
  }
}
