import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './Pages/Home/Home';
import { SignIn } from './Pages/Sign-in/SignIn';
import { User } from './Pages/User/User';
import { Error404 } from './Pages/Error404/Error404';

import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';

export function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={<User />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      <Footer />
    </Router>
  );
};