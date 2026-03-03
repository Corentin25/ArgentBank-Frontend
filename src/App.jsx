import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { LogIn } from "./Pages/LogIn/LogIn";
import { User } from "./Pages/User/User";
import { Transaction } from "./Pages/Transaction/Transaction";
import { Error404 } from "./Pages/Error404/Error404";

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/profile" element={<User />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}
