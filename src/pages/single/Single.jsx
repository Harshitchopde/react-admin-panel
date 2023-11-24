import Chart from "../../components/charts/chart/Chart";
import DataTable from "../../components/datatable/DataTable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss"

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="title">Information</div>
            <div className="editButton">edit</div>
            <div className="item">
              <img src="https://www.newindianmodels.com/wp-content/uploads/2019/07/247768-493x740.jpg" alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Heroine</h1>
                <div className="detailItem">
                  <div className="itemKey">Email:</div>
                  <div className="itemValue">model@gmail.com</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Phone:</div>
                  <div className="itemValue">+91 XXXX XXXX 9589</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Address:</div>
                  <div className="itemValue">Multai,Betul (M.P)</div>
                </div>
                <div className="detailItem">
                  <div className="itemKey">Country:</div>
                  <div className="itemValue">Bharat</div>
                </div>
              </div>
            </div>
            
          </div>
          <div className="right">
            <Chart aspect={3/1} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transation of 6 month</h1>
          <DataTable/>
        </div>
      </div>
    </div>
  )
}

export default Single;
