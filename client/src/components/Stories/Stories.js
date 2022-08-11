import React, { useState, useRef, useEffect } from 'react';
import ArrowButton from '../Common/ArrowButton';
import Box from '../Common/Box';
import Story from './Story';

export default function Stories({ stories }) {
  const MAX_ITEMS = 7;
  const MIN_WIDTH = 80;
  const [x, setX] = useState(0);
  const [maxItems, setMaxItems] = useState(MAX_ITEMS);
  const [minX, setMinX] = useState(0);

  const windowRef = useRef(null);

  useEffect(() => {
    if (windowRef.current.clientWidth > 0) {
      ((windowRef.current.clientWidth / MIN_WIDTH) | 0) !== maxItems &&
        ((windowRef.current.clientWidth / MIN_WIDTH) | 0) <= MAX_ITEMS &&
        setMaxItems((windowRef.current.clientWidth / MIN_WIDTH) | 0);
      setMinX(-((stories?.length - maxItems) * MIN_WIDTH + (5 - maxItems) * 15));
    }
  }, []);

  const calculateTransform = (newX) => {
    if (newX < minX) setX(minX);
    else if (newX > 0) setX(0);
    else setX(newX);
  };

  return (
    <Box className="stories-container sm:full-width" border>
      <div
        className="stories-feed overflow-y-hidden py-4 px-2 flex relative items-center"
        ref={windowRef}>
        {x !== 0 && (
          <ArrowButton
            place="left"
            text="<"
            onClick={() => calculateTransform(x + 320)}
          />
        )}
        <div
          className="stories-feed-floating flex relative transition ease-linear duration-300"
          style={{ transform: `translate(${x}px, 0px)` }}>
          {stories &&
            stories.map((item) => (
              <Story data={item} key={item.username} />
            ))}
        </div>
        {x !== minX && stories?.length > maxItems && (
          <ArrowButton
            place="right"
            text=">"
            onClick={() => calculateTransform(x - 320)}
          />
        )}
      </div>
    </Box>
  );
}
