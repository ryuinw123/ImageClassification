import React, { useContext } from 'react'
import { ThemeContext } from '../context'
import background from '../data/background.jpg'
import "./Header.css"

const Header = () => {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="home-image-wrapper" style={{backgroundImage : darkMode && `linear-gradient(180deg, rgba(18, 18, 18, 0) 88.02%, #121212 100%), url(${background})` , color : darkMode && "white"}}>
            <div className="homepage-box" style = {{background : darkMode && "rgba(33, 33, 33, 0.75)"}}>
                <div className="homepage-text">
                    <h1>
                        BIRD 400 - SPECIES<br />
                        IMAGE CLASSIFICATION
                    </h1>
                    <p>
                        Find the species of bird <br />
                        from image.
                    </p>
                </div>
                <div className = "top-left"></div>
                <div className = "top-right"></div>
                <div className = "bottom-left"></div>
                <div className = "bottom-right"></div>
            </div>
        </div>
  )
}

export default Header