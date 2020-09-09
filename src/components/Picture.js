import React from 'react'
import Facts from './Facts'


export default function Header(props) {

   const {title , img , explanation} = props
    return (
        <div className = 'pic-container'>
            <h2>{title}</h2>
            <img src ={img}alt = 'Star Cluster'></img>
            <div className = 'facts'>
                <Facts explanation = {explanation}/>
            </div>
        </div>
    )
}