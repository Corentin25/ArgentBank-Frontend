import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './Pages/Home/Home';
import { SignIn } from './Pages/Sign-in/SignIn';
import { User } from './Pages/User/User';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';

export function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={<User />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};