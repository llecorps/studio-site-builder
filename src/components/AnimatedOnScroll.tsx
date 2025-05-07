
import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: string;
}

const AnimatedOnScroll: React.FC<AnimatedOnScrollProps> = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  animation = 'animate-slide-up'
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animation);
              entry.target.classList.add('opacity-100');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animation, delay, threshold]);

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-all duration-700 ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
