import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const useLocomotiveScroll = (start: boolean) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (!start || !scrollRef.current) return;

    locomotiveScrollRef.current = new LocomotiveScroll({
      lenisOptions: {
        wrapper: scrollRef.current,
        content: scrollRef.current.firstElementChild as HTMLElement,
        duration: 1.2,
        smoothWheel: true,
        orientation: 'horizontal',
        wheelMultiplier: 1.0,
        touchMultiplier: 2.0,
      },
    } as any);

    const handleResize = () => {
      if (locomotiveScrollRef.current) {
        (locomotiveScrollRef.current as any).resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      locomotiveScrollRef.current?.destroy();
    };
  }, [start]);

  return { scrollRef, locomotiveScroll: locomotiveScrollRef.current };
};
