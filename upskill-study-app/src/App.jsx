import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Counter from "./pages/Counter";
import Event from "./pages/Event";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path={"/"} element={<Counter />} /> */}
          <Route path={"/"} element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
