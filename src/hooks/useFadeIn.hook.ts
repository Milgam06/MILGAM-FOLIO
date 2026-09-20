'use client';
import { useAnimate } from 'motion/react-mini';
import { useEffect, useRef } from 'react';

export const useFadeIn = () => {
  const [ref, animate] = useAnimate<HTMLDivElement>();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = ref.current;
    const isUnsupported = !element || !('IntersectionObserver' in window) || !('animate' in element);
    if (isUnsupported) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const isAlreadyInViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (isAlreadyInViewport) {
      return;
    }

    const computedStyle = getComputedStyle(element);
    const targetTransform = computedStyle.transform;
    const isTransformNone = targetTransform === 'none';
    const originalOpacity = element.style.opacity;
    const originalTransform = element.style.transform;
    const restoreStyles = () => {
      element.style.opacity = originalOpacity;
      element.style.transform = originalTransform;
    };
    const animation = animate(
      element,
      {
        opacity: [0.25, Number(computedStyle.opacity)],
        transform: [`translateY(16px) ${isTransformNone ? '' : targetTransform}`, targetTransform],
      },
      { duration: 0.6, ease: 'easeOut', autoplay: false, onComplete: restoreStyles },
    );
    animation.time = 0;
    const reveal = () => {
      const isWaitingToReveal = animation.state === 'paused';
      if (!isWaitingToReveal) {
        return;
      }

      observerRef.current?.disconnect();
      window.removeEventListener('resize', observe);
      element.removeEventListener('focusin', reveal);
      animation.play();
    };

    const observe = () => {
      observerRef.current?.disconnect();
      const revealOffset = window.innerHeight * 0.3;
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          const isReadyToReveal = entry.isIntersecting;
          if (isReadyToReveal) {
            reveal();
          }
        },
        { threshold: 0, rootMargin: `0px 0px -${revealOffset}px 0px` },
      );
      observerRef.current.observe(element);
    };

    observe();
    window.addEventListener('resize', observe);
    element.addEventListener('focusin', reveal);

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      animation.cancel();
      restoreStyles();
      window.removeEventListener('resize', observe);
      element.removeEventListener('focusin', reveal);
    };
  }, [animate, ref]);

  return ref;
};
