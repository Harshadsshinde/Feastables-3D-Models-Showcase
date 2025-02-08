import React, { useState } from 'react';
import '../styles.css'; // Import custom styles
import '../move.css';
import shop from "../pages/Shop";
const VideoGallery = () => {
  const [mutedStates, setMutedStates] = useState([true, true, true, true]); // Default all videos muted

  // Toggle mute/unmute for each video
  const toggleMute = (index) => {
    setMutedStates(prevState => 
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
   <div className='border-b-4 pb-2'>
    <div className='bg-amber-400 mt-8 m-7 border-4 rounded-4xl flex flex-col items-center overflow-hidden border-b-4'>
      {/* Title */}
      
      <div className='relative text-center pt-20 flex items-center'>
        {/* Cloud Animation */}
        <div className='clouds absolute top-0 left-0 w-full h-full'>
          <div className='clouds-animation'>
            <img src='../cloud3.png' alt='Cloud' className='cloud3 cloud ' />
            <img src='../cloud4.png' alt='Cloud' className='cloud4 cloud' />
            
          </div>
        </div>
        <h1 className='text-8xl font-bold font-[Anton] text-white text-border'>
          A FLAVOR FOR <br /> EVERY CRAVING
        </h1>
      </div>

      {/* Video & Image Scroller (with infinite scroll) */}
      <div className='video-gallery'>
        <div className='scroll-container mt-10 px-14 p-2'>
          <div className='scroll-content'>
            <div className='scroll-item'>
              <video 
                src='../img/vid1.mp4' 
                autoPlay 
                loop 
                muted={mutedStates[0]} 
                className='w-full h-full object-cover'
              ></video>
              <button 
                onClick={() => toggleMute(0)} 
                className='mute-button'>
                {mutedStates[0] ? (
                  <i className="fas fa-volume-mute"></i>
                ) : (
                  <i className="fas fa-volume-up"></i>
                )}
              </button>
            </div>
            <div className='scroll-item'>
              <img src='../img/img1.webp' alt='Placeholder' />
            </div>
            <div className='scroll-item'>
              <video 
                src='./img/vid2.mp4' 
                autoPlay 
                loop 
                muted={mutedStates[1]} 
                className='w-full h-full object-cover'
              ></video>
              <button 
                onClick={() => toggleMute(1)} 
                className='mute-button'>
                {mutedStates[1] ? (
                  <i className="fas fa-volume-mute"></i>
                ) : (
                  <i className="fas fa-volume-up"></i>
                )}
              </button>
            </div>
            <div className='scroll-item'>
              <img src='../img/img2.webp' alt='Placeholder' />
            </div>

            {/* Repeat the content for seamless scroll */}
            <div className='scroll-item'>
              <video 
                src='../img/vid3.mp4' 
                autoPlay 
                loop 
                muted={mutedStates[2]} 
                className='w-full h-full object-cover'
              ></video>
              <button 
                onClick={() => toggleMute(2)} 
                className='mute-button'>
                {mutedStates[2] ? (
                  <i className="fas fa-volume-mute"></i>
                ) : (
                  <i className="fas fa-volume-up"></i>
                )}
              </button>
            </div>
            <div className='scroll-item'>
              <img src='../img/img3.webp' alt='Placeholder' />
            </div>
            <div className='scroll-item'>
              <video 
                src='../img/vid4.mp4' 
                autoPlay 
                loop 
                muted={mutedStates[3]} 
                className='w-full h-full object-cover'
              ></video>
              <button 
                onClick={() => toggleMute(3)} 
                className='mute-button'>
                {mutedStates[3] ? (
                  <i className="fas fa-volume-mute"></i>
                ) : (
                  <i className="fas fa-volume-up"></i>
                )}
              </button>
            </div>
            <div className='scroll-item'>
              <img src='../img/img4.webp' alt='Placeholder' />
            </div>
            <div className='scroll-item'>
              <video 
                src='../img/vid5.mp4' 
                autoPlay 
                loop 
                muted={mutedStates[3]} 
                className='w-full h-full object-cover'
              ></video>
              <button 
                onClick={() => toggleMute(3)} 
                className='mute-button'>
                {mutedStates[3] ? (
                  <i className="fas fa-volume-mute"></i>
                ) : (
                  <i className="fas fa-volume-up"></i>
                )}
              </button>
            </div>
            <div className='scroll-item'>
              <img src='../img/img5.webp' alt='Placeholder' />
            </div>
            <div className='scroll-item'>
              <video 
                src='../img/vid1.mp4' 
                autoPlay 
                loop 
                muted={mutedStates[3]} 
                className='w-full h-full object-cover'
              ></video>
              <button 
                onClick={() => toggleMute(3)} 
                className='mute-button'>
                {mutedStates[3] ? (
                  <i className="fas fa-volume-mute"></i>
                ) : (
                  <i className="fas fa-volume-up"></i>
                )}
              </button>
            </div>
            <div className='scroll-item'>
              <img src='../img/img1.webp' alt='Placeholder' />
            </div>
          </div>
        </div>
      </div>

      {/* Chocolate Bar Type Scroller (Infinite scroll for types of bar) */}
      <div className='chocolate-bar-gallery'>
        <div className='scroll-container mt-10 p-2'>
          <div className='scroll-content gap-7 onClick={/shop} '>
            <div className='scroll-item'>
              <img src='./milk.webp' alt='Milk Chocolate Bar' />
              <p>Milk Chocolate</p>
            </div>
            <div className='scroll-item'>
              <img src='./dark.jpg' alt='Dark Chocolate Bar' />
              <p>Dark Chocolate</p>
            </div>
            <div className='scroll-item'>
              <img src='./almond.webp' alt='Almond Chocolate Bar' />
              <p>Almond Chocolate</p>
            </div>
            <div className='scroll-item'>
              <img src='./penut.webp' alt='Peanut Butter Chocolate Bar' />
              <p>Peanut Butter Chocolate</p>
            </div>

            {/* Repeat the content for seamless scroll */}
            <div className='scroll-item'>
              <img src='./milk.webp' alt='Milk Chocolate Bar' />
              <p>Milk Chocolate</p>
            </div>
            <div className='scroll-item'>
              <img  src='./almond.webp' alt='Dark Chocolate Bar' />
              <p>Dark Chocolate</p>
            </div>
            <div className='scroll-item'>
              <img src='./almond.webp' alt='Almond Chocolate Bar' />
              <p>Almond Chocolate</p>
            </div>
            <div className='scroll-item'>
              <img src='./penut.webp' alt='Peanut Butter Chocolate Bar' />
              <p>Peanut Butter Chocolate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div> 
  );
};

export default VideoGallery;
