import { Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./header";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
