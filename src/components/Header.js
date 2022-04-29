import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className="home-image-wrapper">
            <div className="homepage-box">
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