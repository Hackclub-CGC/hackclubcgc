import React from 'react';
import './components.css'

const Gallary = () => {
    return (
        <div className='Gallary'>
                <h3>Gallary</h3>
                <p id='G-para'>Glimpse into HackClub CGC</p>
                <div className='Gallary-cards'>
                    {/* <div className="Gallary-Items" style={{flexBasis:"33%"}}> 
                    <img src={"https://cloud-glq611b5e-hack-club-bot.vercel.app/0whatsapp_image_2021-12-20_at_3.53.41_pm.jpeg"} className='gallary-img' alt='gallary'> 
                    </img> 
                    </div> */}
                    <div className="Gallary-Items" style={{flexBasis:"33%"}}> 
                    <img src={"https://cloud-6wm8xvekj-hack-club-bot.vercel.app/0img_4110.jpg"} className='gallary-img' alt='gallary'> 
                    </img> 
                    </div>
                    <div className="Gallary-Items" style={{flexBasis:"33%"}}> 
                    <img src={"https://cloud-edlt9pja4-hack-club-bot.vercel.app/0img20211220120327.jpg"} className='gallary-img' alt='gallary'> 
                    </img> 
                    </div>
                    
                    <div className="Gallary-Items" style={{flexBasis:"33%"}}> 
                    <img src={"https://cloud-j3pjcvrwo-hack-club-bot.vercel.app/1img20211220123745.jpg"} className='gallary-img' alt='gallary'> 
                    </img> 
                    </div>
                </div>
            
        </div>
    );
}

export default Gallary;
