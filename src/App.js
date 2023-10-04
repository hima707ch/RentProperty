import {
  BrowserRouter,
  Router,
  useNavigate,
  Routes,
  Route,
  useParams
} from "react-router-dom";


import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles.css";
import {data} from './data'
import Home from "./components/Home";

import { useDispatch, useSelector } from "react-redux";
import HouseCard from "./components/HouseCard";
import { useEffect } from "react";

export default function App() {
  const city = useSelector((s) => s.city);
  const dispatch = useDispatch();

  return (
    <div className="App">
      
      <Routes>

        <Route path = '/' element = {<div className="house-cont">
        <Navbar/>
        <div className="houses">
        <Home />
        </div>
        <Footer/>
      </div>} />

      <Route path='/property/:id' element={<div className="house-cont">
      <HouseCard fulldata = {data[city]} data={null} ind = {5} />
      </div>
      }/>

      </Routes>
      
      
    </div>
  );
}
