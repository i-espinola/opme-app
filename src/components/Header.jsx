import React from 'react'

// Style
import '../assets/scss/components/Header.scss'

// Components Childs
import Brand from './Brand'

export default function Header (props) {
    return (
        <header>
            <Brand />
        </header>
    )
}
