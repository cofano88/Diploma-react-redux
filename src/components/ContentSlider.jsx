import React, { useState } from "react";
import { VideoCard } from "./VideoCard";
import styles from "./contentSlider.module.css";

export function ContentSlider({ items, stats, nextPageRequest }) {
  const goLeft = () => {
    !(x === 0) && setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (items.length - 7) ? nextPageRequest() : setX(x - 100);
  };
  const [x, setX] = useState(0);
  return (
    <>
      <div
        className={styles.contentSlider}
        onWheel={(e) => (e.deltaY < 0 ? goRight() : goLeft())}
      >
        {items.map((item, index) => (
          <VideoCard
            item={item}
            stats={stats}
            x={x}
            key={item.id.videoId}
            index={index}
          />
        ))}
      </div>
      <div className={styles.buttons}>
        <button id={styles.goLeft} onClick={goLeft}>
          left
        </button>
        <button id={styles.goRight} onClick={goRight}>
          right
        </button>
      </div>
    </>
  );
}
