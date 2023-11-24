import { DriveFolderUpload } from "@mui/icons-material"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./new.scss"
import { useState } from "react"

const New = ({ title, inputs }) => {
  const [file,setFile]=useState("");
  return (
    <div className="new">

      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file?URL.createObjectURL(file): "https://as1.ftcdn.net/v2/jpg/04/34/72/82/1000_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg"} 
         
            alt=""
            />

          </div>
          <div className="right">
            <form >
              <div className="formInput">

                <label htmlFor="file">
                  Image: <DriveFolderUpload className="icon" />
                  <input type="file" id="file"
                     onChange={(e)=>setFile(e.target.files[0])}
                      style={{ display: "none" }} />
                </label>
              </div>
              {inputs?.map((item) => (
                <div className="formInput" key={item.id}>
                  <label >{item.label}</label>
                  <input type={item.type} placeholder={item.placeholder} />
                </div>
              ))}


              <button>send</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default New
