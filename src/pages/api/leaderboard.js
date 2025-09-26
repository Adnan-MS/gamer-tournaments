import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("bgmi_tournaments");

    const players = await db
      .collection("players")
      .find({})
      .sort({ points: -1, kills: -1 }) // top players first
      .toArray();

    res.status(200).json(players);
  } catch (err) {
    console.error(err);
    res.status(500).json([]);
  }
}
