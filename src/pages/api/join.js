import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("bgmiTournaments");

  if (req.method === "POST") {
    const { name, entryFee } = req.body;
    if (!name || !entryFee) return res.status(400).json({ error: "Missing fields" });
    const player = await db.collection("players").insertOne({ name, entryFee, kills: 0, points: 0 });
    res.status(200).json({ message: "Player joined!", player });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
