import { RefObject, useEffect, useRef, useState } from "react"


type Options = {
    threshold: number,
    reappear: boolean,
}


export const useSlideElementEffect = (options: Options): [RefObject<HTMLDivElement>, boolean] => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);


    const makeAppear = (entries: any) => {
        const [entry] = entries;
        console.log('Entry intersecting', entry.isIntersecting);
        if(entry.isIntersecting)
            setIsVisible(true);
    };

    const makeAppearRepeating = (entries: any) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };



    useEffect(() => {
        const containerRefCurrent = containerRef.current;
        const observer = new IntersectionObserver(makeAppear, options);
        console.log('ref',containerRefCurrent);
        if(containerRefCurrent)
            observer.observe(containerRefCurrent);

        return () => {
            observer.disconnect();
        };

    }, [containerRef, options]);

    return [containerRef, isVisible];
};