import "./navbar.scss"
import LanguageIcon from '@mui/icons-material/Language';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const Navbar = () => {
  const {dispatch,darkMode}= useContext(DarkModeContext);
  
  const handleToggle =()=>{
    
    darkMode?dispatch({type:"LIGHT"}):dispatch({type:"DARK"})
  
  }
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."></input>
          <SearchOutlinedIcon/>
        </div>
        <div className="items">
          <div className="item">
           <LanguageIcon />
            English
          </div>
          <div className="item"  onClick={()=>handleToggle()}>
           <BedtimeOutlinedIcon className="icon" />

          </div>
        
          <div className="item">
           <CropFreeOutlinedIcon  className="icon"/>
           
          </div>
          <div className="item">
           <NotificationsNoneOutlinedIcon className="icon"/>
           <div className="counter">2</div>
           
          </div>
          <div className="item">
           <MessageOutlinedIcon className="icon"/>
           <div className="counter">1</div>
          </div>
          <div className="item">
           <MenuOutlinedIcon className="icon"/>
           
          </div>
          <div className="item">
          <img className="avatar" src="https://4.bp.blogspot.com/-ymg-mim0hTA/XGgnEx1DFZI/AAAAAAAACa0/DQ71hBiXiNMrOZapSbNOJoDKtXus1qSzACEwYBhgL/s1600/WhatsApp%2BImage%2B2019-02-16%2Bat%2B4.36.48%2BPM.jpeg" alt=""/>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Navbar
