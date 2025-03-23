import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Landing from "./pages/landing/Landing";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen font-[family-name:var(--font-ubuntu-sans)]">
      <header>
        <Navbar />
      </header>
      <main>
        <Landing />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
