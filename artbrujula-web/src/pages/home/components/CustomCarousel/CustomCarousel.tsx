import React, { useState, useEffect } from "react";
import styles from "./CustomCarousel.module.scss";
import images from "src/shared/data/images";
import { CustomCarouselProps } from "./CustomCarousel.types";
import { AutoPlayStart, AutoPlayStop, slideNext } from "./CustomCarousel.helpers";

const CustomCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [slideDone, setSlideDone] = useState<boolean>(true);
  const [timeID, setTimeID] = useState<NodeJS.Timeout | null>(null);
  const caption = images[activeIndex].caption;

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      const id = setTimeout(() => {
        slideNext(setActiveIndex, children);
        setSlideDone(true);
      }, 5000);
      setTimeID(id);
    }

    return () => {
      if (timeID) clearTimeout(timeID);
    };
  }, [slideDone]);

  return (
    <div
      className={styles.container__slider}
      onMouseEnter={() => AutoPlayStop(timeID, setSlideDone)}
      onMouseLeave={() => AutoPlayStart(slideDone, setSlideDone)}
    >
      <div
        className={styles.slider__track}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children.map((item, index) => (
          <div className={styles.slider__item} key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.slider__dots}>
        {children.map((_, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? `${styles.slider__dot} ${styles.slider__dot_active}`
                : styles.slider__dot
            }
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
          ></button>
        ))}
      </div>
      <div className={styles.slider__content_title}>
        <span>{caption}</span>
      </div>
    </div>
  );
};

export default CustomCarousel;
