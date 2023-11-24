import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import Widget from "../../components/widget/Widget"
import Chart from "../../components/charts/chart/Chart"
import Featured from "../../components/charts/featured/Featured"
import TableTransaction from "../../components/table/TableTransaction"
// import "../..components/table/Table"

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          {/* it will contain all navagition content in it */}
            <Navbar/>
            <div className="widgets">
              <Widget type="user"/>
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>
              
              
            </div>
            <div className="charts">
            <Featured />
            <Chart aspect={3/1} />
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest transaction's
              </div>
            <TableTransaction/>
            </div>
            
        </div>
      
    </div>
  )
}

export default Home
