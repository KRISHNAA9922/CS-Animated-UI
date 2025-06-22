'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
    items,
    direction = 'up',
    speed = 'fast',
    pauseOnHover = true,
    className,
}: {
    items: {
        id: number;
        name: string;
        logoUrl: string;
    }[];
    direction?: 'up' | 'down'; // Now vertical
    speed?: 'fast' | 'normal' | 'slow';
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);
            scrollerContent.forEach(item => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current?.appendChild(duplicatedItem);
            });
            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'up') {
                containerRef.current.style.setProperty('--animation-direction', 'forwards');
            } else {
                containerRef.current.style.setProperty('--animation-direction', 'reverse');
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty('--animation-duration', '20s');
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty('--animation-duration', '40s');
            } else {
                containerRef.current.style.setProperty('--animation-duration', '80s');
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn('scroller relative z-20 max-h-[500px] overflow-hidden', className)}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    'flex flex-col gap-4 py-4',
                    start && 'animate-scroll-vertical',
                    pauseOnHover && 'hover:[animation-play-state:paused]'
                )}
            >
                {items.map(item => (
                    <li
                        key={item.id}
                        className="flex h-[90px] w-[150px] items-center justify-center rounded-xl bg-white shadow-md border border-gray-200 mx-auto"
                    >
                        <Image
                            src={item.logoUrl}
                            alt={item.name}
                            width={90}
                            height={100}
                            className="h-full w-full object-cover
                            "
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
