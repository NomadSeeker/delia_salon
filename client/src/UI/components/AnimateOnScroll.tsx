import { ReactNode } from "react"

import { useSlideElementEffect } from "../../hooks/useSlideElementEffect";

import '../animateOnScroll.css';

type AnimateOnScrollProps = {
    children: ReactNode;
    reappear?: boolean;
    threshold?: number;
};



const AnimateOnScroll = ({children, reappear=true, threshold=0}: AnimateOnScrollProps) => {
    const [containerRef, isVisible] = useSlideElementEffect({
        threshold,
        reappear
    });

    return (
        <>
            <div ref={containerRef} className={`slide-in ${isVisible ? 'is-visible' : ''}`}> 
                {children}
            </div>
        </>
    );
}

export default AnimateOnScroll;