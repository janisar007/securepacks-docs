import React from 'react';

const Video = () => {
  return (
    <div className='video-section'>
      <div className='info'>
        {/* Related Information */}
        <h2>Working on Buildpacks to Make Builds</h2>
        <p>Here you can provide related information about how you are working on buildpacks to make builds.</p>
        <p>This could include descriptions, bullet points, or any other relevant information.</p>
        <p>Ages: You can mention the target age group for the content here.</p>
      </div>
      <div className='video'>
        <iframe
        width="500px"
        height="300px"
        src="https://collegemanage.s3.ap-south-1.amazonaws.com/812117/drawing/SecurePacks%20%281%29.mp4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="SecurePack"
        className='video-iframe'
        
      ></iframe>
      </div>
    </div>
  );
}

export default Video;