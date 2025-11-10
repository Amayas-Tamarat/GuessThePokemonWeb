import { Routes, Route } from "react-router-dom";
import Home from "./pages//home/Home";

export default function App() {
  return (
    <Routes>
      {/* Home Page (/) */}
      <Route path="/" element={<Home />} />


    </Routes>
  );
}
