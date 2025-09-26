import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EntryFeeCards from "../components/EntryFeeCards";
import Leaderboard from "../components/Leaderboard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-dark-gradient min-h-screen">
      <Navbar />
      <Hero />
      <EntryFeeCards />
      <Leaderboard />
      <Footer />
    </div>
  );
}
