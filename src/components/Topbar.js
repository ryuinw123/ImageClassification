import React, { useContext } from 'react'
import { GiHummingbird } from 'react-icons/gi'
import {MdOutlineDarkMode} from 'react-icons/md'
import { ThemeContext } from '../context'
import './Topbar.css'

const Topbar = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" })
    }
  return (
    <div className="header">
            <div className="navbar-wrapper" style = {{background : darkMode && "rgba(33, 33, 33, 0.75)" }}>
                <div className="navbar">
                    <div className="navbar-container-left">
                        <div className="navbar-logo">
                            <GiHummingbird className="navbar-icon" style = {{color : darkMode && "white"}}/>
                        </div>
                        <p style = {{color : darkMode && "white"}}>BirdFinder</p>
                    </div>
                    <div className="navbar-container-right">
                        <div className="Moon">
                            <MdOutlineDarkMode className="darkMode" style = {{color : darkMode && "white"}}/>
                        </div>
                        <div className="t" style={{ backgroundColor: theme.state.darkMode ? "#58A8E8" : "#9B9B9B" }}>
                            <div className="t-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 20 : -5 }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Topbar