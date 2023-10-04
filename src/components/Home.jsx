import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {data} from "../data"

import HouseCard from "./HouseCard";

export default function Home() {
  const nav = useNavigate();

  const city = useSelector(s=>s.city);
  const count = useSelector(s=>s.count);

  return <Fragment>
    {data[city].slice(0,count).map((e,ind)=><HouseCard data={e} ind ={ind} />)}
  </Fragment>;
}
