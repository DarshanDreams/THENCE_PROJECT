import React from 'react';
import './SuccessStories.css'; // Import CSS file for styling
import photo from './photo.png'; // Import your photo image

function SuccessStories() {
    return (
    <>
    
    <div className="main-part-container">
    <h2 className="success-stories-title">SUCCESS STORIES</h2>
    <p className="every-success-journey">Every success journey</p>
    <div className="content">
      <div className="photo-container">
        <img src={photo} alt="Success Photo" className="photo" />
        <div className="component-box white-box-1">
          <p className="bold-text">COMPONENT 1</p>
        </div>
        <div className="component-box tube-shape white-box">
          <p className="bold-text">COMPONENT 2</p>
        </div>
        <div className="component-box dark-green-box">
          <p className="bold-text">COMPONENT 3</p>
        </div>
      </div>
      <div className="text-content">
        <h3>Enhanced Fortune</h3>
        <div className="carousels">
          <div className="carousel-item bright-green"/>
          <div className="carousel-item grey"></div>
          <div className="carousel-item grey"></div>
        </div>
        <button className="explore-button">Explore More</button>
      </div>
    </div>
  </div>
  </>
);
}


export default SuccessStories;
