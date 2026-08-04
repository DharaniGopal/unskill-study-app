import { NavLink } from "react-router-dom";

const menus = [
  { path: "/counter", label: "Counter" },
  { path: "/event", label: "Event" },
  { path: "/use-callback", label: "UseCallback" },
  { path: "/use-ref", label: "UseRef" },
  { path: "/use-memo", label: "UseMemo" },
  { path: "/use-layout-effect", label: "UseLayoutEffect" },
  { path: "/search-debounce", label: "Search Debounce" },
  { path: "/toggle", label: "Toggle" },
  { path: "/todo-list", label: "Todo List" },
  { path: "/abort-controller", label: "AbortController" },
  { path: "/sort-name", label: "Sort Name" },
  { path: "/stopwatch", label: "StopWatch" },
  { path: "/count-optimization", label: "Count Optimization" },
  { path: "/error-loading-useffect", label: "Error Loading Useffect" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Upskill Study</h2>
      <nav className="sidebar-nav">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            {menu.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
