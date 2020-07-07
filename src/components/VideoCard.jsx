import React, { useState } from "react";
import styles from "./videoCard.module.css";
export function VideoCard({ item, stats, x, index }) {
  const [frontTransform, setFrontTransform] = useState(
    "perspective(600px) rotateY(0deg)"
  );
  const [backTransform, setBackTransform] = useState(
    "perspective(600px) rotateY(180deg)"
  );

  const link = "https://www.youtube.com/watch?v=" + item.id.videoId;
  const toBack = () => {
    setFrontTransform("perspective(600px) rotateY(-180deg)");
    setBackTransform("perspective(600px) rotateY(0deg)");
  };
  const toFront = () => {
    setFrontTransform("perspective(600px) rotateY(0deg)");
    setBackTransform("perspective(600px) rotateY(180deg)");
  };

  return (
    <div
      style={{ transform: `translateX(${x}%)` }}
      className={styles.videoCard_wrap}
    >
      <div className={styles.videoCard}>
        <div
          className={styles.front}
          id="front"
          style={{ transform: frontTransform }}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
          </a>
          <div>{item.snippet.title}</div>
          <div>description: {item.snippet.description}</div>
          <button id="toBack" onClick={toBack}>
            statictics
          </button>
        </div>
        <div
          className={styles.back}
          id="back"
          style={{ transform: backTransform }}
        >
          <button id="toFront" onClick={toFront}>
            back
          </button>
          <div>view count: {stats[index].statistics.viewCount}</div>
          <div>like count: {stats[index].statistics.likeCount}</div>
          <div>dislike count: {stats[index].statistics.dislikeCount}</div>
          <div>comment count: {stats[index].statistics.commentCount}</div>
        </div>
      </div>
    </div>
  );
}
