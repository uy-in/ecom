import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
