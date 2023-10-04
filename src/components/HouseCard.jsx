import "./houseCard.css"

import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import {useNavigate, useParams} from "react-router-dom"

export default function HouseCard({ fulldata, data, ind }) {

  const nav = useNavigate();
  const params = useParams();

  if(data === null){
    data = fulldata[params.id];
    ind = params.id;
  }

  return (
    <div className="card-cont">
      <img src = {data.imgUrl}/>
      <div className="above-image">
      <button className="sale">For {data.sale}</button>
      <button className="fav"><FavoriteBorderOutlinedIcon /></button>
      </div>
      <div className="details">
      <p className="loc"> <LocationOnOutlinedIcon style={{color : "brown"}} fontSize="tiny"/> {data.location} </p>
      <h1 className="title"> {data.name} </h1>
      <div className="spec"> 
      <ul>
        <li> <MapsHomeWorkOutlinedIcon className="icon"/> 3 Room</li>
        <li> <BedOutlinedIcon className="icon"/> 4 Bed</li>
        <li> <BathtubOutlinedIcon className="icon" /> 1 Bath</li>
        <li> <LocationSearchingOutlinedIcon className="icon" /> 732 sft</li>
      </ul>
      </div>

      <div className="line"></div>

      <div className="price">
        <p className="rent">${data.price}</p>
        <button className="read" onClick={()=>{
          nav('/property/' + ind)
        }}>Read More</button>
      </div>
      </div>
    </div>
  );
}
