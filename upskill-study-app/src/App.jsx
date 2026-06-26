import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Counter from "./pages/Counter";
// import Event from "./pages/Event";
// import UseRefCounter from "./pages/useRefCounter";
import UseCallbackCounter from "./pages/UseCallbacKCounter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path={"/"} element={<Counter />} /> */}
          {/* <Route path={"/"} element={<Event />} /> */}
          {/* <Route path={"/"} element={<UseRefCounter />} /> */}
          <Route path={"/"} element={<UseCallbackCounter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
