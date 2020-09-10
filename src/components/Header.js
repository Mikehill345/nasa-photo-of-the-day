import React from 'react'
import styled, { keyframes } from 'styled-components'

const StyledH1 = styled.h1`
margin:0;
padding:${pr => pr.theme.paddingLarge};
font-size:${pr => pr.theme.titleFont};
color:${pr => pr.theme.purple};
border-bottom: 1px solid black;
font-family:${pr => pr.theme.h1Font};
`
const StyledLinks = styled.a`
text-decoration:none;
border-radius: 8px;
background-color:${pr => pr.theme.black};
color:${pr => pr.theme.textColor};
padding:1.5%;
transition: 0.3s ease-in-out;

&:hover{
    transition: 0.3s ease-in-out;
background-color:${pr => pr.theme.white};
color:${pr => pr.theme.black};
}
`
const StyledNav = styled.nav`
display:flex;
justify-content:space-evenly;
padding:${pr => pr.theme.paddingLarge};
width:50%;
margin:0 auto;

`
export default function Header(props) {
    const { date } = props

    return (
        <header className='header'>
            <StyledH1>Nasa Astronomy Picture Of The Day</StyledH1>
            <StyledNav>
                <StyledLinks href='#'>Home</StyledLinks>
                <StyledLinks href='#'>about</StyledLinks>
                <StyledLinks href='#'>Pictures</StyledLinks>
                <StyledLinks href='#'>Stuff</StyledLinks>
            </StyledNav>
            <p>Date: {date}</p>
        </header>
    )
}