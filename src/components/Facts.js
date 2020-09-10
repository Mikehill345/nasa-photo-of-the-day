import React from 'react'
import styled, {keyframes} from 'styled-components'

const StyledP = styled.p`
width:60%;
margin:0 auto;
padding:${pr => pr.theme.paddingLarge};
`
const StyledPDiv = styled.div`
margin:2%;
`

export default function Header(props) {

const {explanation } = props

    return (
        <StyledPDiv className = 'facts'>
            <StyledP>{explanation}</StyledP>
        </StyledPDiv>
    )
}