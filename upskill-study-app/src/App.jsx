import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Counter from "./pages/Counter";
import Event from "./pages/Event";
import UseCallbacKCounter from "./pages/UseCallbacKCounter";
import UseMemoCounter from "./pages/UseMemoCounter";
import UseRefCounter from "./pages/useRefCounter";
import UseLayoutEffectWidth from "./pages/UseLayoutEffectWidth";
import SearchDebounceCounter from "./pages/SearchDebounceCounter";
import Toggle from "./pages/Toggle";
import TodoList from "./pages/TodoList";
import AbortControllerUser from "./pages/AbortControllerUser";
import SortName from "./pages/SortName";
import StopWatch from "./pages/StopWatch";
import CountOptimization from "./pages/CountOptimization";
import ErrorLoadingUseeffect from "./pages/ErrorLoadingUseeffect";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Navigate to="/counter" replace />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/event" element={<Event />} />
            <Route path="/use-callback" element={<UseCallbacKCounter />} />
            <Route path="/use-ref" element={<UseRefCounter />} />
            <Route path="/use-memo" element={<UseMemoCounter />} />
            <Route path="/use-layout-effect" element={<UseLayoutEffectWidth />} />
            <Route path="/search-debounce" element={<SearchDebounceCounter />} />
            <Route path="/toggle" element={<Toggle />} />
            <Route path="/todo-list" element={<TodoList />} />
            <Route path="/abort-controller" element={<AbortControllerUser />} />
            <Route path="/sort-name" element={<SortName />} />
            <Route path="/stopwatch" element={<StopWatch />} />
            <Route path="/count-optimization" element={<CountOptimization />} />
            <Route path="/error-loading-useffect" element={<ErrorLoadingUseeffect />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
