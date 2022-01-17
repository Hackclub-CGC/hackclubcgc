import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import './pages.css'

export default function Events() {

    const HCCGC=[
        {
        name:"Cyber Talk's 2.0 ",
        Date:"Dec 20 2021",
        image:"https://cloud-kwscjr9mg-hack-club-bot.vercel.app/0cybertalks_2.0.png",
        register:"https://lu.ma/j38oby77"
        },{
        name:"Java Bootcamp ",
        Date:"Oct 09 2021",
        image:"https://cloud-j84355kz3-hack-club-bot.vercel.app/0244496743_1203329470147851_8638365799427182736_n.webp",
        register:"https://lu.ma/The-java-Bootcamp"
        },{
        name:"The Newbie's Protocol ",
        Date:"Sept 25 2021",
        image:"https://cloud-717uu6ct8-hack-club-bot.vercel.app/0242476736_1248699618916784_4481066510672056671_n.jpg"
        ,
        register:"https://lu.ma/gi0pv3tg"
        },{
        name:"React Js Bootcamp",
        Date:"Aug 01 2021",
        image:"https://cloud-717uu6ct8-hack-club-bot.vercel.app/1225731607_792374181451648_1370877239386653428_n.jpg"
        ,
        register:"https://lu.ma/lvlzero"
        },{
        name:"The JavaScript Bootcamp ",
        Date:"May 29 2021",
        image:"https://cloud-717uu6ct8-hack-club-bot.vercel.app/2188161926_761971434518356_4976558115583644756_n.jpg",
        register:"https://lu.ma/jsbootcamp"
   
        },
    ]




    const [Event, setEvent]= useState([])
    
    useEffect(()=>{
        const url="https://events.hackclub.com/api/events/upcoming/";

        fetch(url).then(resp=>resp.json())
        .then(resp=>setEvent(resp))

        
    },[])
     
/* HackClub Global Events card */
    const GlobalEvents = (event) =>{
        const date = new Date(event.start).toString();
        
        return(
        <div className='Events'>
            <div className='Global-events'>
                <div className='G-card'>
                    <img id="avatar" src={event.avatar} alt={event.alt}></img>
                    
                    <p>{event.leader}</p>
                    <h6>{event.title}</h6>
                    <p>{date}</p>
                    <Button className='cal-btn' href={event.cal} target="_blank">Add to calender</Button>
                </div>
            </div>
        </div>
        );
    };
/* HackClub CGC events card */
    const EventsCGC = (event) =>{
        return(
            <div className='Events'>
            <div className='Global-events'>
                <div className='G-card'>
                    <img src={event.image} alt={event.alt} className='card-img'></img>
                    
                    <h6>{event.name}</h6>
                    <p>{event.Date}</p>
                    <Button className='cal-btn' href={event.register} target='_blank'>Register</Button>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div>

            <h3 align="center">HackClub CGC Events</h3>
            <div className='Global-events'>
            {HCCGC.map(EventsCGC)}
            </div>
            <h3 align="center">HackClub Global Events</h3>
            <div className='Global-events'>
            
            {Event.map(GlobalEvents)}
            </div>
            
        </div>
    )
}
