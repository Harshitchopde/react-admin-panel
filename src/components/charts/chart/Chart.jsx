import React from 'react'
import "./chart.scss"
import { linearGradient, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from 'recharts';
// use the recharts in this part

const Chart = () => {

  const data = [
    {
      name: 'janvary',
     
      amt: 2400,
    },
    {
      name: 'febvuary',
     
      amt: 2210,
    },
    {
      name: 'march',
     
      
      amt: 2290,
    },
    {
      name: 'april',
   
      amt: 2000,
    },
    {
      name: 'may',
   
      amt: 2181,
    },
    {
      name: 'june',
   
      amt: 2500,
    },
    {
      name: 'july',
      amt: 2100,
    },
  ];
  return (
    <div className='chart'>
      <h4 className='title'>7 month Result </h4>
      <ResponsiveContainer width="100%" aspect={2/1}>


        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
           
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="amt" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
         
        </AreaChart>
      </ResponsiveContainer>



    </div>
  )
}

export default Chart
