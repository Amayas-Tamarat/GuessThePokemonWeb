import { Routes, Route } from "react-router-dom";
import Home from "./pages//home/Home";
import Game from "./pages/game/Game";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-yellow-50 via-blue-50 to-white text-gray-900 font-sans overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}