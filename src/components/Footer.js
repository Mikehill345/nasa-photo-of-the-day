import React from 'react'
import styled, {keyframes} from 'styled-components'

const StyledFooter = styled.footer`
text-align:center;
margin: 0;
padding: ${pr => pr.theme.paddingLarge};
background-color:${pr => pr.theme.lightGrey};
color:${pr => pr.theme.black};
`

export default function Header(props) {
const { copyright } = props
    return (
        <StyledFooter className='footer'>
            <p>copyright: {copyright}</p>
        </StyledFooter>
    )
}