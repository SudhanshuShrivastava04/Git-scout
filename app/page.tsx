import SearchCard from "./components/SearchCard";

export default function Home() {
  return (
    <main className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center p-5 gap-5 justify-between">
      <nav className="flex gap-5 flex-col items-center">
        <div className="text-5xl md:text-8xl font-bold text-white font-custom">
          Git Scout
        </div>
        <SearchCard />
      </nav>
      <footer>
        links
      </footer>
    </main>
  );
}
