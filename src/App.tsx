import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lottery from "./screens/Lottery";
import Profile from "./screens/Profile";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div className=" bg-[#000000] min-h-screen w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Lottery />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
