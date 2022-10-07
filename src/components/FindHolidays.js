import React, { useState } from 'react'
import CardData from './CardData' 

function FindHolidays(props) {

const [destination,setDestination]=useState("Thrissur")
const [destDetails,setDestDetails]=useState("")
const [allData,setAllData]=useState(CardData)



// console.log(cardItems)

// console.log({datas})

// let finalObj={} 
// for(let i = 0; i < CardData.length; i++ ) {
//     Object.assign(...finalObj, CardData[i]);
//   }
// console.log(Object)

let districtToGo= CardData.map((item)=>{
        return <option>{item.district}</option>
    }
    )

function getDetails(e)
{
   e.preventDefault();

   let filterPlace=allData.flatMap((item)=>{
    return (
     <ul>
        <li className='dest'> {item.travel_partner} :- Ph: {item.phone}</li>

        </ul>
    ) 
        
})

setDestDetails(filterPlace)   
}

console.log(destDetails)



  return (
    <div className='Holiday' id='holiday'>
        <h1>Find Your Best Holiday</h1>
        <p>Find great adventure holidays and activities around the planet.</p>
        {/* <h5>{cardContent.district}</h5> */}
        <div>

            <form>
                <select className='holi_select' onChange={(e)=>setDestination({destination : e.target.value})}>
                    
                    <option>Where would you like to go.?</option>
                    {districtToGo}
                
                </select>
                <button className='holi_butn' type="submit" onClick={(e)=>getDetails(e)}> Search <i class="fa fa-search" ></i></button>
            </form>
            <br></br>

      {destDetails}
  <br></br>
        
        </div>
    </div>
  )
}

export default FindHolidays