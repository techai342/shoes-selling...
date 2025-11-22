import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, animation = 'fade-in', threshold = 0.1 }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animation);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, threshold]);

  return React.cloneElement(children, { ref: elementRef });
};

export default ScrollAnimation;
