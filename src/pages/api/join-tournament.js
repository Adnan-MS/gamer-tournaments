import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, entryFee } = req.body;

  if (!name || !entryFee) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("bgmi_tournaments");

    console.log("Connected to DB, inserting player:", name, entryFee);

    await db.collection("players").insertOne({
      name,
      kills: 0,
      points: 0,
      entryFee,
    });

    res.status(200).json({ message: `${name} joined successfully!` });
  } catch (err) {
    console.error("JOIN TOURNAMENT ERROR:", err);
    res.status(500).json({ message: "Database error" });
  }
}
