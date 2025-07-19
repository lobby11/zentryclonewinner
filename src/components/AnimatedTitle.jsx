import React, { useRef, useEffect } from 'react'; // Corrected: Added useEffect import
import gsap from 'gsap';

const AnimatedTitle = ({ title, containerClass }) => {
    // This ref needs to be attached to the main container element
    const containerRef = useRef(null);

    useEffect(() => {
        // Using gsap.context() for safe animations and automatic cleanup
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'center bottom',
                    toggleActions: 'play none none reverse'
                }
            });

            titleAnimation.to('.animated-word', {
                opacity: 1,
                // Corrected: The transform string syntax was invalid.
                // Removed commas and extra rotateY.
                transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
                ease: 'power2.inOut',
                stagger: 0.02,
            });
        }, containerRef); // Scope the context to the container

        // Corrected: Added cleanup function to revert animations when the component unmounts
        return () => ctx.revert();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        // Corrected: Attached the ref to the div element
        <div ref={containerRef} className={`animated-title ${containerClass}`}>
            {title.split("<br />").map((line, index) => (
                <div
                    key={index}
                    className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
                >
                    {line.split(" ").map((word, i) => (
                        <span
                            key={i}
                            className="animated-word"
                            dangerouslySetInnerHTML={{ __html: word }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default AnimatedTitle;