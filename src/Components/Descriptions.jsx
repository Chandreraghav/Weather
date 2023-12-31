import React from 'react'
import './description.css'
import {FaArrowUp,FaArrowDown,FaWind} from "react-icons/fa";
import {BiHappy} from "react-icons/bi";
import { MdCompress,MdOutlineWaterDrop} from 'react-icons/md'

const Descriptions = ({weather,units}) => {
   
   const tempUnit= units === 'metric' ? '°C'  : '°F'
   const windUnit= units ==='metric' ? 'm/s' : 'm/h'
    
  const card= [
  {
    id:1,
    icon:<FaArrowDown/>,
    title:"min",
    data: weather.temp_min,
    unit:tempUnit,
  },
  {
    id:2,
    icon:<FaArrowUp/>,
    title:"max",
    data: weather.temp_max,
    unit:tempUnit,
  },
  {
    id:3,
    icon:<BiHappy/>,
    title:"feels like",
    data: weather.feels_like,
    unit:tempUnit,
  },

  {
    id:4,
    icon:<MdCompress/>,
    title:"pressure",
    data: weather.pressure,
    unit:"hpa",
  },

  {
    id:5,
    icon:<MdOutlineWaterDrop/>,
    title:"humidity",
    data: weather.humidity,
    unit:"%",
  },


{
  id:6,
  icon:<FaWind/>,
  title:"wind speed",
  data: weather.speed,
  unit:"m/s",
},

];

  return (
    <div className="section section_descriptions">
    {card.map(({id,icon,title,data,unit})=>(
     <div key={id} className="card">
        <div className="description_card-icon">
          {icon}
          {/* <FaArrowDown/> */}
          <small>{title}</small>
        </div>
        {/* <h2>32°C</h2> */}
        <h2>{`${data} ${unit}`}</h2>
       </div>

    ))}
      

     



        </div>
 
  )
}

export default Descriptions