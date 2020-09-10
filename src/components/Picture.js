import React from 'react'
import Facts from './Facts'
import styled, {keyframes} from 'styled-components'

const kf = keyframes`
100%{
    opacity:1;
}
`

const Styledh2 = styled.h2`
padding:${pr => pr.theme.paddingLarge};
`
const StyledPic = styled.img`
opacity : 0;
animation:${kf} 2s forwards;
width:80%;
height:auto;
`


export default function Header(props) {

   const {title , img , explanation} = props
    return (
        <div className = 'pic-container'>
            <Styledh2>{title}</Styledh2>
            <StyledPic src ={img}alt = 'Star Cluster'></StyledPic>
            <div className = 'facts'>
                <Facts explanation = {explanation}/>
            </div>
        </div>
    )
}