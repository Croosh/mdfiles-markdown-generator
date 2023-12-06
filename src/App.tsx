import Landing from "./Landing/Landing";
import Generator from "./Generator/Generator";
import { Route, Routes } from "react-router-dom";
import Cheatsheet from "./Cheatsheet/Cheatsheet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/cheatsheet" element={<Cheatsheet />} />
      </Routes>
    </>
  );
}

export default App;
