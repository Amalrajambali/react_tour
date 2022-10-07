import React, { useEffect, useRef, useState } from "react";

function Card(props) { 
    const [btnFav,setbtnfav]=useState("Add to favorites");
    const [classState,setClassState]=useState('');
    


    // const notInitialRender = useRef(false)
    // useEffect(()=>{
    //     if (notInitialRender.current) {
    //         if(props.cardContent.imgSrc===props.crossrem)
    //         {
    //             addToFavorite_cr(props.crossrem)
    //         }
    
    //         console.log(notInitialRender.current)
    //       } else {
    //         notInitialRender.current = true
    //       }
      
    // },[props.crossrem.id])


   //remove fav using 'x' button corresponding changes to the image and button

   const notInitialRender = useRef(false)

    useEffect(()=>{
                if(props.cardContent.imgSrc===props.crossrem)
                {
                    addToFavorite_cr(props.crossrem)
                }
    },[props.crossrem])
  
  

            function addToFavorite(imgsrc)
            {
                
                setbtnfav((prevstate)=>{
                    if(prevstate==="Add to favorites"){
                        props.getFavImages(imgsrc); // function is to be defined in app.js
                        return "Added to favorites"
                    }
                    else{
                        props.removeFavImages(imgsrc);
                        return "Add to favorites"
                    }
                });

                setClassState((prevclass=>{
                    if(prevclass===""){
                        return "active"
                    }else{
                        return ""
                    }
                }))
            }

            function addToFavorite_cr(imgsrc)
            {
                
                setbtnfav((prevstate)=>{
                    if(prevstate==="Add to favorites"){
                        return "Added to favorites"
                    }
                    else{

                        return "Add to favorites"
                    }
                });

                setClassState((prevclass=>{
                    if(prevclass===""){
                        return "active"
                    }else{
                        return ""
                    }
                }))
            }

        


    const nextline=3;
    return (
        <div className={`card ${classState}`}>
            <i className="icon fas fa-heart"></i>
            <img src={props.cardContent.imgSrc}  alt="image"/>
            <h3>{props.cardContent.place}</h3>
            <p>{props.cardContent.Discription}</p>
            <p>Ph:{props.cardContent.Phone}</p>
            <button onClick={()=>{
                addToFavorite(props.cardContent.imgSrc); //we use callback funtion to pass a parameter into a function
                }}>
                {btnFav}
            </button>
        </div>
    )
}

export default Card;
