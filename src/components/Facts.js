import React from 'react'

export default function Header(props) {

const {explanation } = props

    return (
        <div className = 'facts'>
            <p>{explanation}</p>
        </div>
    )
}