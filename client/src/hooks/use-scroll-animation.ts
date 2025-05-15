import { useEffect } from 'react';
import { useAnimation, AnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

/**
 * Custom hook to trigger animations when elements come into view
 * 
 * @param options Configuration options for the intersection observer
 * @returns Object containing animation controls and ref to be attached to the target element
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}): {
  controls: AnimationControls;
  ref: (node?: Element | null) => void;
} {
  const { threshold = 0.3, triggerOnce = true } = options;
  
  // Animation controls from framer-motion
  const controls = useAnimation();
  
  // Intersection observer hook
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });
  
  // Trigger animation when element comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [controls, inView, triggerOnce]);
  
  return { controls, ref };
}