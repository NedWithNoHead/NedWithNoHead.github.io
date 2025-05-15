import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * A simplified animation hook that doesn't depend on framer-motion's useAnimation
 * 
 * @param options Configuration options for the intersection observer
 * @returns Object containing isVisible state and ref to be attached to the target element
 */
export function useSimpleAnimation(options: { 
  threshold?: number;
  triggerOnce?: boolean;
} = {}) {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  
  // Use the intersection observer
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });
  
  // Update visibility when element comes into view
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else if (!triggerOnce) {
      setIsVisible(false);
    }
  }, [inView, triggerOnce]);
  
  return { ref, isVisible };
}