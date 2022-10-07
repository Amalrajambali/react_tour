import Card from './components/Card';
import React, { useState,useEffect } from "react";
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import CardData from './components/CardData';
import FindHolidays from './components/FindHolidays';
import Contact_us from './components/Contact_us';

import "./Style.css";

function App() {

        let [FavImage,setFavImage]=useState([])
        let [crossrem,setCrossrem]=useState([])

              //Get all the favorites images

              function getFavImages(imgsrc){
                  setFavImage([...FavImage,imgsrc]); //spread operater used  for mutiple image display together
              }

              //lets map each fav images

              let UserImage=FavImage.map((imgsrc)=>{
                return(
                  <div className="favimg" >
                      <img src={imgsrc}/>
                      <i class="delicon far fa-times-circle" onClick={()=>{
                        removeCrFavImages(imgsrc)}}></i>
                  </div>
                  )
              })

              

          
              // lets remove favorites images -using x button

              function removeCrFavImages(imgsrc)
              {
                setCrossrem(imgsrc)
                setFavImage([...FavImage].filter((currentimg)=>
                {
                  return currentimg!=imgsrc
                }))
              }

            
              console.log(crossrem)
              
            

              //remove unfavorites useing click button again (normal method)

              function removeFavImages(imgsrc)
              {
                setFavImage([...FavImage].filter((currentimg)=>{
                  return currentimg!=imgsrc
                }))
              }

              
              //CardData ingot kondvaran

              let card=CardData.map((carditem,index)=>{
                return(
                  <Card
                    cardContent={{
                    key:index,
                    imgSrc : carditem.imgSrc,
                    place: carditem.place,
                    Discription: carditem.Discription,
                    Phone: carditem.phone 
                  }}
                  getFavImages={
                    getFavImages
                  }
                  removeFavImages={
                    removeFavImages
                  }
                  crossrem={
                    crossrem
                  }
                  /> 
                )
              })

             


//main return-in app.js


  return (
    <div className="App">
      <Header/>
      <Hero/>


      {/* card component */}
      <div className="container-flex">
        <h1>Destinations</h1>
        <br/>
          <div className="card-container">
            {card}

          
                <aside>
                    <h2>Favourate's</h2>
                    <br/><br/><br/>
                    {UserImage}
                </aside>
            

          </div>
        </div> 
       
      <FindHolidays />
      <Contact_us/>
       <Footer/>
    </div>
  );
}

export default App;
