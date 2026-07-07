import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Counter from "./pages/Counter";
import Event from "./pages/Event";
import UseCallbacKCounter from "./pages/UseCallbacKCounter"
import UseMemoCounter from "./pages/UseMemoCounter";
import UseRefCounter from "./pages/useRefCounter";
import UseLayoutEffectWidth from "./pages/UseLayoutEffectWidth";
import SearchDebounceCounter from "./pages/SearchDebounceCounter";
import Toggle from "./pages/Toggle";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path={"/"} element={<Counter />} /> */}
          {/* <Route path={"/"} element={<Event />} /> */}
          {/* <Route path={"/"} element={<UseCallbacKCounter />} /> */}
          {/* <Route path={"/"} element={<UseRefCounter />} /> */}
          {/* <Route path={"/"} element={<UseMemoCounter />} /> */}
          <Route path="/" element={<UseLayoutEffectWidth />} />
          {/* <Route path="/" element={<SearchDebounceCounter />} /> */}
          {/* <Route path="/" element={<Toggle />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
