import "./Carousel.css"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs";
import { useState } from "react";

const Carousel = ({data}) => {
    const[slide,setSlide]=useState(0);

    const nextSlide=()=>{
                // Moving to next slide
                setSlide(slide===data.length-1?0:slide+1)
               
    }

    const prevSlide=()=>{
        // Moving to previous slide
        setSlide(slide===0?data.length-1:slide-1)
    }

    

  return (
    <div className="carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        {data.map((item,index)=>{
            return <img src={item?.src} alt={item?.alt} key={index} className={slide===index?"carousel-slide":"carousel-slide hidden"}/>
        })}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
        <span className="indicators">
            {data.map((_,index)=>{
                    return <button key={index} className={slide===index?"indicator":"indicator inactive"} onClick={()=>setSlide(index)}></button>
            })}
        </span>
    </div>
  
  )
}

export default Carousel