import React from 'react'
import './components.css'
export default function whatwedo() {

const cardItem = () => <><p>hello</p></>
    return (
        <div className="Wmain">
            <h3>What We Do</h3>
            <p><strong>We code, learn and teach together. We believe in open source and innovation. We organize bootcamps, events, community sessions and make projects</strong> </p>
            <div className="Wcards">
                <div className="Wc-items" style={{flexBasis:"33%"}}>Item 1 {cardItem}</div>
                <div className="Wc-items" style={{flexBasis:"33%"}}>Item 2</div>
                <div className="Wc-items" style={{flexBasis:"33%"}}>Item 3</div>
            </div>
        </div>
    )
}
