
import { useState } from "react";
import "./Carousel.css";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";

export default function Carousel({data}){
    const[slide, setSlide] = useState(0);

    const nextSlide = ()=>{
        setSlide(slide === data.length-1 ? 0: slide+1)
    }

    const prevSlide = () =>{
        setSlide(slide === 0? data.length-1: slide-1)
    }
    
    return (
    <div className="main">
        <h4>Sri Matre Namaha</h4>
        <div>
        <p className='fl'>Go Ganeshaya Namaha</p>
        <p className='fr'>Go Gurubhyo Namaha</p></div>
    <div className="carousel">
        <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
        {data.map((item,idx)=>{
            return <img src={item.src} alt={item.alt} key={idx} className={slide === idx? "slide":"slide-hidden"}/>
        })}
        <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
        <span className="indicators">
            {data.map((_,idx) =>{
                return <button key={idx} onClick={()=> setSlide(idx)} className={slide===idx ? "indicator":"indicator indicator-inactive"}></button>
            })}
        </span>
    </div>
    <span className="sloka">Sarwa Mangala Mangalye Sive Sarwardha Sadhike <br/>
    Saranye Trayambike Devi Narayani Namostute
    </span><br/>
    <div className="contact">We provide below Offerings. Contact <div className="num">9000320768</div> for appointments</div><br/>
    <div className="cards">
    <div class="card">
            <ul>
                <li>Jataka Pariharalu</li>
                <li>Match Makings</li>
                <li>Kuja Dosha Pariharalu</li>
                <li>Kala Sarpa Dosha Pariharalu</li>
                <li>EliNati Shani Pariharalu</li>
                <li>Navagraha Dosha Pariharalu</li>
            </ul>
    </div>
    <div class="card">
            <ul>
                <li>Court Disputes</li>
                <li>Spouse Disputes</li>
                <li>Financial Disputes</li>
                <li>Professional Disputes</li>
                <li>Health Problems</li>
                <li>Stress/Anxiety</li>
                <li>Life Hizards</li>
            </ul>
    </div>
  < div class="card">
            <ul>
                <li>House Warming Cermony</li>
                <li>Marriages</li>
                <li>Naming Cermony</li>
                <li>Upanayanas</li>
                <li>Aksharabhyas</li>
            </ul>
    </div>
    </div>
    </div>
    )
}