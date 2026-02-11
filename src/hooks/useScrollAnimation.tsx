import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationOptions {
  offset?: ['start end' | 'start start' | 'center center' | 'end start' | 'end end', 'start end' | 'start start' | 'center center' | 'end start' | 'end end'];
  springConfig?: { stiffness: number; damping: number; mass: number };
}

export const useScrollAnimation = (options?: ScrollAnimationOptions) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: options?.offset || ['start end', 'end start'],
  });

  return { ref, scrollYProgress };
};

export const useParallax = (value: MotionValue<number>, distance: number) => {
  return useTransform(value, [0, 1], [-distance, distance]);
};

export const useOpacityOnScroll = (value: MotionValue<number>) => {
  return useTransform(value, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
};

export const useScaleOnScroll = (value: MotionValue<number>, minScale = 0.8, maxScale = 1) => {
  return useTransform(value, [0, 0.5, 1], [minScale, maxScale, minScale]);
};

export const useRotateOnScroll = (value: MotionValue<number>, degrees = 10) => {
  return useTransform(value, [0, 1], [-degrees, degrees]);
};

export const useSlideInFromLeft = (value: MotionValue<number>, distance = 100) => {
  return useTransform(value, [0, 0.3, 0.7, 1], [-distance, 0, 0, distance]);
};

export const useSlideInFromRight = (value: MotionValue<number>, distance = 100) => {
  return useTransform(value, [0, 0.3, 0.7, 1], [distance, 0, 0, -distance]);
};
