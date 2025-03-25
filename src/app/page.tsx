import Landing from "../components/landing/Landing";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 min-h-screen font-[family-name:var(--font-ubuntu-sans)]">
      <main>
        <Landing />
      </main>
    </div>
  );
}
