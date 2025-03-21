import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/app/pages/home/homePage";



export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen font-[family-name:var(--font-ubuntu-sans)]">
      <header>
        <Navbar />
      </header>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
