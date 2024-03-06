import Navbar from "../components/navbar";
import Hero from "../components/heroes";
import Work from "../components/work";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="h-screen m-20 mt-60">
      <Navbar />
      <Hero />
      <Work />
      <Footer />
    </div>
  );
}
