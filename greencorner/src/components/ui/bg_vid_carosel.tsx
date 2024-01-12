"use client"
import React, { useRef } from 'react';

interface BackgroundVideoProps {
 src: string;
 type: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, type }) => {
 const videoRef = useRef<HTMLVideoElement>(null);

 React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
      video.loop = true;
      video.muted = true;
    }
 }, [videoRef]);

 return (
    <video ref={videoRef} autoPlay muted loop className="w-full h-full">
      <source src={require(src)} type={type} />
    </video>
 );
};

export default BackgroundVideo;