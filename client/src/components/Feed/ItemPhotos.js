import React, { useState, useRef, useEffect } from 'react';

import ArrowButton from '../Common/ArrowButton';

export default function FeedItemPhotos({ photos }) {
  const photoRef = useRef(0);

  const [photosX, setPhotosX] = useState(0);
  const [refLoaded, setRefLoaded] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [minX, setMinX] = useState(
    -((photoRef.current.width + 2) * (photos.length - 1)),
  );

  useEffect(() => {
    if (photoRef) setRefLoaded(true);
  }, [photoRef]);

  useEffect(() => {
    if (photoRef.current.width > 0)
      setMinX(-((photoRef.current.width + 2) * (photos.length - 1)));
  }, [photos.length]);

  const slideButtonEvent = (x) => {
    if (x < minX) setPhotosX(minX);
    else if (x > 0) setPhotosX(0);
    else setPhotosX(x);
  };

  return (
    <div className="feed-photo-container flex relative items-center">
      {photosX !== 0 && (
        <ArrowButton
          place="left"
          text="<"
          onClick={() => {
            slideButtonEvent(photosX + photoRef.current.width + 2);
            setSelectedPhoto(selectedPhoto - 1);
          }}
        />
      )}
      <div
        className="feed-photo-images-container w-full flex relative transition ease-linear duration-200"
        style={{ transform: `translate(${photosX}px, 0px)` }}>
        <img className="flex-1 object-fill" src={photos[0]} ref={photoRef} alt="first item"/>{' '}
        {refLoaded &&
          photos.map(
            (item, index) =>
              index !== 0 && (
                <img alt='item'
                  key={index}
                  className="flex-1 object-fill hide-photo absolute overflow-hidden"
                  style={{
                    width: photoRef.current.width,
                    transform: `translate(${(photoRef.current.width + 2) * index
                      }px, 0px)`,
                  }}
                  src={item}
                />
              ),
          )}
      </div>
      {photosX !== minX && photos.length > 1 && (
        <ArrowButton
          place="right"
          text=">"
          onClick={() => {
            slideButtonEvent(photosX - photoRef.current.width - 2);
            setSelectedPhoto(selectedPhoto + 1);
          }}
        />
      )}
      {photos.length > 1 && (
        <div className="slide-dots absolute flex">
          {photos.map((item, index) => (
            <div
              key={index}
              className="slide-dot flex justify-center"
              style={{
                backgroundColor: index === selectedPhoto && '#0095F6',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
