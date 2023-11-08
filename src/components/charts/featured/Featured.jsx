import { KeyboardArrowDown, KeyboardArrowUp, MoreVertOutlined } from '@mui/icons-material'
import React from 'react'
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <div className="title">Title</div>
            <MoreVertOutlined fontSize='small' style={{color:'blueviolet'}}/>

        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text='70%' strokeWidth={4}/>

            </div>
            <div className="title">Totel sales made today</div>
            <div className="amount">$420</div>
            <div className="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis,</div>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult neg">
                        <KeyboardArrowDown fontSize='small'/>
                        <div className="resultAmount">$25.4M</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult neg">
                        <KeyboardArrowDown fontSize='small'/>
                        <div className="resultAmount">$25.4M</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult pos">
                        <KeyboardArrowUp fontSize='small'/>
                        <div className="resultAmount">$25.4M</div>
                    </div>
                </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Featured
