import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Mainpage from "./page/MainPage";
import Navbar from "./components/Layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/mainpage"
          element={
            <>
              <Navbar />
              <Mainpage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
