import React, { useState } from 'react'

function Contact_us() {
  //
  const [infor,setInfor]=useState("")
  let contact_data=
  {
    Name: "Travello",
    phone: 7012089055,
    E_mail:"Trevello@kerala.in",
    Address: " Hilite Bussiness park 2nd floor pantherankavu  ",
    district: "kozhikode,kerala, india ",
}

function contactinfo()
{
 console.log(contact_data.Name)
 setInfor(contact_data)
}



console.log(infor)

  return (
    <div className='contact_us' id='contact'>
      <h3>Get In Touch With US</h3>
      <p>Want to know morw about tours or got any questions,contact us..</p>
      <button onClick={contactinfo} >CONTACT US</button>
      <div style={{}}>
      <ul>
        <li>{infor.Name}</li>
        <li>{infor.phone}</li>
        <li>{infor.E_mail}</li>
        <li>{infor.Address}</li>
        <li>{infor.district}</li>
    
      </ul>

      </div>
      
    </div>
  )
}

export default Contact_us