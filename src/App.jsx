import "./App.scss";
import Layout from "./Components/Layout/Layout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Products from "./Pages/Products/Products";
import Home from "./Pages/Home/Home";
import Careers from "./Pages/Careers/Careers";
import ContactUs from "./Pages/ContactUs/ContactUs";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
