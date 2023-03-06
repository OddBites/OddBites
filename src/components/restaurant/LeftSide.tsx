import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "../../styles/leftSide.module.css";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// TODO: type 'r'
const LeftSide = ({ r }:any) => {
  return (
    <div className={styles.bar}>
      <h2 className={styles.name}>{r.name}</h2>
      <div className={styles.location}>
        <FontAwesomeIcon icon={faLocationDot} />
        <span className={styles.address}>{r.address}</span>
      </div>
      <p className={styles.description}>{r.description}</p>

      <CarouselProvider
        visibleSlides={1}
        totalSlides={r.slides.length}
        step={1}
        naturalSlideWidth={16}
        naturalSlideHeight={9}
        hasMasterSpinner
      >
        <Slider>
          {
            r.slides.map((slide: any, idx: number) => (
              <Slide key={idx} index={idx}>
                <ImageWithZoom src={slide.src} />
              </Slide>
            ))
          }
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default LeftSide;