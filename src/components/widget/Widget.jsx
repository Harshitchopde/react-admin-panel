import { MonetizationOnOutlined,  ShoppingCartOutlined } from "@mui/icons-material";
import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { red } from "@mui/material/colors";
import { rgbToHex } from "@mui/material";
const Widget = ({type}) => {
  let data;
  // data.title="dsfasdfa";
  let amount=100;
  let diff=20;
  switch(type){
    case "user":
      data={
        title:"USERs",
        isMoney:false,
        link:"See all uses",
        icon:<PersonOutlineIcon style={{
          color:"blue",
          backgroundColor:"rgb(201, 201, 248)"}}
          className="icon"/>,
      };
      break;
    case "order":
        data={
        title:"ORDERS",
        isMoney:false,
        link:"View all orders",
        icon:<ShoppingCartOutlined className="icon" style={{
          color:'red',
          backgroundColor:" rgb(248, 204, 204)"
        }}/>,
      };
      break;
    case "earning":
      data={
        title:"EARNINGS",
        isMoney:true,
        link:"View new Earning",
        icon:<MonetizationOnOutlined style={{
          color:"orange",
          backgroundColor:"rgb(245, 229, 199)"
        }} className="icon"/>,
      };
      break;
    case "balance":
      data={
        title:"BALANCE",
        isMoney:false,
        link:"See user balance",
        icon:<AccountBalanceIcon  style={{
          color:"pink",
          backgroundColor:"rgb(249, 234, 237)"
        }} className="icon"/>,
      };
      break;
    default:
      break;  
  }
  
  return (
    <div className="widget">
        <div className="left">
          <div className="title">{data.title}</div>
          <div className="counter">{data.isMoney && "$"}{amount}</div>
          <div className="link">{data.link}</div>

        </div>
        <div className="right">
          
          <div className="percentage negative">
            <KeyboardArrowUpIcon/>
            {diff}%
          </div>
          {data.icon}
        </div>
      
    </div>
  )
}

export default Widget;
