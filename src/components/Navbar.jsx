import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data";

import { cities } from "../data";
import { useDispatch,useSelector } from "react-redux";
import {setCity} from "../Slices/citySlice"; 
import { loadmore,reset } from "../Slices/countSlice";

export default function Navbar() {
  const city = useSelector(s=>s.city);  

  const dispatch = useDispatch();

  return (
    <div className="nav-cont">
      {cities.map(e=><button onClick={()=>{ 
        dispatch(reset());
        dispatch(setCity(e))}} style={{backgroundColor : city === e ? "rgb(44, 44, 255)":"", color : city===e ? "white":""}} >{e}</button>)}
    </div>
  );
}
