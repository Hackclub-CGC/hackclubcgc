import React from 'react'
import './pages.css'
export default function Team() {

    const Members =[
        {
        name:"Vikas K. Sethi",
        role: "Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/prof.png"},
        {
        name:"Saksham Singh",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/saksham_singh.jpg"},
        {
        name:"Vipul Gupta",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/vipul.jpg"},
        {
        name:"Samarth Sinha",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/samarth.jpg"},
        {
        name:"Anurag Bhardwaj",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/anurag.jpg"},
        {
        name:"Rohtansh Sehgal",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/Rohtansh.jpg"},
        {
        name:"Yash K. Pal",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/yash.jpg"},
        {
        name:"Sachin Sharma",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/sachin.jpg"},
        {
        name:"Gaurav Sharma",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/gaurav.jpg"},
        {
        name:"Jatin Tanwar",
        role: "Co-Lead",
        image:"https://github.com/vikassethi09/hcmembers/blob/main/jatin%20tanwar.jpeg?raw=true"},
        {
        name:"Dishima Munjal",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/dishima.jpeg"},
        {
        name:"Harsimran Singh",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/harsimran.jpg"},
        {
        name:"Hermeher Singh",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/hermehar.jpg"},
        {
        name:"Harshit",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/harshit%20gupta.jpg"},
        {
        name:"Anish",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/Anish.jpg"},
        {
        name:"Simran",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/simran.jpg"},
        {
        name:"Subham",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/shubham%20bansal.jpg"},
        {
        name:"Priyansh",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/priyansh.jfif"},
        {
        name:"Yatish",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/yatish.jpg"},
        {
        name:"Adarsh",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/adarsh%20sharma.png"},
        {
        name:"Deepak",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/deepak.jpg"},
        {
        name:"Jasleen",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/jasleen%20kaur%20-%20Jasleen%20kaur.jpeg"},
        {
        name:"Rahul Roy",
        role: "Co-Lead",
        image:"https://raw.githubusercontent.com/vikassethi09/hcmembers/main/rahul%20roy.JPG"},
        

    ];

    const membercard = (card) =>{
        return (
            <div className='t-card'> 
            <img className='team-img' src={card.image} alt={card.alt}></img><br></br>
            <h4>{card.name}</h4>
            {card.role}
            
            </div>
        );
    };

    return (
        <div >
            <div className='tag-container'>
                <h1 className='tagline'>For the <br></br>students, <br></br>By the students</h1>
            </div>
            <div className='team-head'>Team 2021-22</div>
            <div className='T-main'>
            {Members.map(membercard)}
            </div>

            

        </div>
    )
}
