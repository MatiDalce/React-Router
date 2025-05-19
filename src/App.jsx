import { Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./header";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
