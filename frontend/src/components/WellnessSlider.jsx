import React, { useCallback, useEffect, useRef, useState } from 'react';
import anxiety from '../assets/ANXITY.jpeg';
import burnout from '../assets/BURNOUT.jpeg';
import academic from '../assets/ACADEMIC.jpeg';

const slides = [
  { title: 'ANXIETY', image: anxiety, text: 'Anxiety can be a normal response to stress. When it starts interfering with everyday life, small grounding habits, supportive people and professional help can make things feel more manageable.' },
  { title: 'BURNOUT', image: burnout, text: 'Burnout can follow prolonged stress or overwork. Rest, boundaries, realistic expectations and asking for support can help you rebuild your energy.' },
  { title: 'ACADEMIC STRESS', image: academic, text: 'Academic pressure can come from exams, deadlines and expectations. Breaking work into smaller steps, taking breaks and asking for help can reduce the load.' },
];

export default function WellnessSlider() {
  const [index, setIndex] = useState(1); // 0 and 4 are clones.
  const [animate, setAnimate] = useState(true);
  const [moving, setMoving] = useState(false);
  const resetTimer = useRef(null);
  const transitionTimer = useRef(null);
  const trackRef = useRef(null);

  const restartAutoPlay = useCallback(() => {
    window.clearTimeout(resetTimer.current);
    resetTimer.current = window.setTimeout(() => {
      if (!moving) setIndex((current) => current + 1);
    }, 5000);
  }, [moving]);

  const move = useCallback((direction) => {
    if (moving) return;
    setMoving(true);
    setAnimate(true);
    setIndex((current) => current + direction);
    window.clearTimeout(resetTimer.current);
  }, [moving]);

  useEffect(() => {
    if (!moving) restartAutoPlay();
    return () => window.clearTimeout(resetTimer.current);
  }, [index, moving, restartAutoPlay]);

  useEffect(() => () => {
    window.clearTimeout(resetTimer.current);
    window.clearTimeout(transitionTimer.current);
  }, []);

  const handleTransitionEnd = (event) => {
    if (event.target !== trackRef.current || event.propertyName !== 'transform') return;

    // Jump from clone to the real slide with NO animation. This prevents the
    // old behaviour where the carousel visibly travels through every slide.
    if (index === slides.length + 1) {
      setAnimate(false);
      setIndex(1);
      transitionTimer.current = window.setTimeout(() => {
        setAnimate(true);
        setMoving(false);
      }, 30);
      return;
    }

    if (index === 0) {
      setAnimate(false);
      setIndex(slides.length);
      transitionTimer.current = window.setTimeout(() => {
        setAnimate(true);
        setMoving(false);
      }, 30);
      return;
    }

    setMoving(false);
  };

  const renderedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  return (
    <section className="wellness" id="wellness">
      <div className="section-head left-head">
        <p className="eyebrow">MENTARA WELLNESS</p>
        <h2>A little context can help.</h2>
        <p>Swipe through a few common experiences and explore the support tools below.</p>
      </div>

      <div className="slider" aria-roledescription="carousel" aria-label="Wellness topics">
        <div
          ref={trackRef}
          className="slides"
          style={{
            transform: `translate3d(-${index * 100}%, 0, 0)`,
            transition: animate ? 'transform 620ms cubic-bezier(.22,.61,.36,1)' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {renderedSlides.map((slide, i) => (
            <article className="slide" key={`${slide.title}-${i}`} aria-hidden={i !== index}>
              <div className="text-box">
                <span className="slide-number">0{((i - 1 + slides.length) % slides.length) + 1}</span>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
              <div className="image-box"><img src={slide.image} alt={slide.title.toLowerCase()} /></div>
            </article>
          ))}
        </div>
        <button type="button" className="nav-btn prev" onClick={() => move(-1)} disabled={moving} aria-label="Previous slide">‹</button>
        <button type="button" className="nav-btn next" onClick={() => move(1)} disabled={moving} aria-label="Next slide">›</button>
        <div className="slider-dots" aria-label="Slide navigation">
          {slides.map((slide, i) => (
            <button key={slide.title} type="button" className={index - 1 === i ? 'active' : ''} onClick={() => !moving && setIndex(i + 1)} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
