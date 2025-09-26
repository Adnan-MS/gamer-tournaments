import { useState } from "react";

export default function EntryFeeCards() {
  const [name, setName] = useState("");
  const fees = [20, 50, 100];

  const joinTournament = async (fee) => {
    if (!name) return alert("Enter your name first!");
    const res = await fetch("/api/join-tournament", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, entryFee: fee }),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <section className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center text-white">
      <div className="md:col-span-3 text-center mb-4">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="p-2 rounded-md text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {fees.map((fee) => (
        <div key={fee} className="bg-[#0a0f2a] p-6 rounded-xl shadow-lg hover:shadow-neonGreen transition text-center">
          <h3 className="text-xl font-bold text-electricBlue mb-2">₹{fee}</h3>
          <button
            className="px-4 py-2 rounded-full bg-neonGreen font-semibold text-black hover:brightness-125 transition"
            onClick={() => joinTournament(fee)}
          >
            Join Tournament
          </button>
        </div>
      ))}
    </section>
  );
}
