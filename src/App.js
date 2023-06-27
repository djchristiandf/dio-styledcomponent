import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import { Feed } from "./pages/feed";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { SignIn } from "./pages/signin";
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
