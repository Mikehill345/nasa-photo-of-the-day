import React from 'react'



export default function Header(props) {
const { copyright } = props
    return (
        <footer className='footer'>
            <p>copyright: {copyright}</p>
        </footer>
    )
}