import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MainMenuItem = ({
    name,
    link,
    id,
    isActive,
    markActive
}) => {
    return (
        <li
            className={isActive[id] ? "active" : ""}
        >
            <Link onClick={() => markActive(id)} to={link}>{name}</Link>
        </li>
    )
}

export default MainMenuItem