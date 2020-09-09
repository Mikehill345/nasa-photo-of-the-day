import React from 'react'


export default function Header(props) {
  const { date} = props

    return (
        <header className = 'header'>
            <h1>Nasa Astronomy Picture Of The Day</h1>
            <nav>
                <a href = '#'>Home</a>
                <a href = '#'>about</a>
                <a href = '#'>More Pictures</a>
                <a href = '#'>Stuff</a>
            </nav>
            <p>Date: {date}</p>
        </header>
    )
}