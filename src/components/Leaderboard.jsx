import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const res = await fetch("/api/leaderboard");
      const data = await res.json();
      setPlayers(Array.isArray(data) ? data : []);
    };

    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="leaderboard" className="py-10 text-white">
      <h2 className="text-3xl font-bold text-electricBlue text-center mb-6">
        Current Leaderboard
      </h2>
      <table className="w-full text-center border-collapse border border-gray-700">
        <thead>
          <tr className="bg-[#0a0f2a]">
            <th className="border border-gray-700 p-2">Name</th>
            <th className="border border-gray-700 p-2">Kills</th>
            <th className="border border-gray-700 p-2">Points</th>
          </tr>
        </thead>
        <tbody className="transition-all duration-500 ease-in-out">
          {players.map((player, idx) => (
            <tr
              key={idx}
              className="hover:bg-gradient-to-r from-[#007BFF]/20 to-[#39FF14]/20 transition duration-300"
            >
              <td className="border border-gray-700 p-2">{player.name}</td>
              <td className="border border-gray-700 p-2">{player.kills}</td>
              <td className="border border-gray-700 p-2">{player.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
