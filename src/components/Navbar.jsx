import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-[#0a0f2a] to-[#1b1f4b] text-white shadow-lg">
      <h1 className="text-2xl font-bold text-electricBlue">Gamers League</h1>
      <div className="flex gap-4">
        <Link href="/" className="hover:text-neonGreen">Home</Link>
        <Link href="/#tournaments" className="hover:text-neonGreen">Tournaments</Link>
        <Link href="/#leaderboard" className="hover:text-neonGreen">Leaderboard</Link>
        <Link href="/#login" className="hover:text-neonGreen">Login</Link>
      </div>
    </nav>
  );
}
