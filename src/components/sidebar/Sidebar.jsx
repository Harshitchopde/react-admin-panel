import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)  
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>

          <span className="logo">Admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{textDecoration:"none"}}>

            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span></li>

          </Link>

          <p className="title">LIST</p>
          <Link to="/users" style={{textDecoration:"none"}}>

          <li>
            <PersonIcon className="icon" />
            <span>User</span></li>
          </Link>
          <Link to="/products" style={{textDecoration:"none"}}>

          <li>
            <CategoryIcon className="icon" />
            <span>Product</span></li>
          </Link>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Orders</span></li>
          <li>
            <DeliveryDiningIcon className="icon" />
            <span>Delivery</span></li>
          <hr />
          <p className="title">USEFUL</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span></li>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span></li>
          <hr />
          <p className="title">SERVISES</p>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>System Health</span></li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span></li>
          <hr />
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span></li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Log Out</span></li>


        </ul>
      </div>
      <hr />
      <div className="bottom">
        <div className="colourOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
        <div className="colourOption" onClick={()=>dispatch({type:"DARK"})}></div>
      </div>

    </div>
  )
}

export default Sidebar;
