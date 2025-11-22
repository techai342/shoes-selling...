import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ 
  children, 
  animation = 'fade-in', 
  threshold = 0.1,
  delay = 0,
  duration = 0.8 
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.style.animation = `${animation} ${duration}s ease-out ${delay}s both`;
          observer.unobserve(element);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, threshold, delay, duration]);

  return React.cloneElement(children, { 
    ref: elementRef,
    style: {
      ...children.props.style,
      opacity: 0
    }
  });
};

export default ScrollAnimation;
