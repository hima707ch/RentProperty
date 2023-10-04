import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";

import { useDispatch, useSelector } from "react-redux";
import { loadmore } from "../Slices/countSlice";

export default function Footer() {

  const dispatch = useDispatch();
  
  return (
    <div className="footer">
      <button onClick={()=>{dispatch(loadmore())}}>Show More</button>
    </div>
  );
}
