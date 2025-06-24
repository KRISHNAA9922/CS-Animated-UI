"use client";

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState, useMemo } from 'react';

export const InfiniteMovingCards = React.memo(({
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
    direction?: 'up' | 'down';
    speed?: 'fast' | 'normal' | 'slow';
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [start, setStart] = useState(false);

    // Memoize duplicated items to avoid cloning DOM nodes manually
    const duplicatedItems = useMemo(() => [...items, ...items], [items]);

    useEffect(() => {
        if (containerRef.current) {
            if (direction === 'up') {
                containerRef.current.style.setProperty('--animation-direction', 'forwards');
            } else {
                containerRef.current.style.setProperty('--animation-direction', 'reverse');
            }

            if (speed === 'fast') {
                containerRef.current.style.setProperty('--animation-duration', '20s');
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty('--animation-duration', '40s');
            } else {
                containerRef.current.style.setProperty('--animation-duration', '80s');
            }
        }
        setStart(true);
    }, [direction, speed]);

    return (
        <div
            ref={containerRef}
            className={cn('scroller relative z-20 max-h-[500px] overflow-hidden will-change-transform', className)}
        >
            <ul
                className={cn(
                    'flex flex-col gap-4 py-4',
                    start && 'animate-scroll-vertical',
                    pauseOnHover && 'hover:[animation-play-state:paused]'
                )}
            >
{duplicatedItems.map((item, index) => (
    <li
        key={item.id + '-' + item.name + '-' + index}
        className="flex h-[90px] w-[150px] items-center justify-center rounded-xl bg-white shadow-md border border-gray-200 mx-auto"
    >
        <Image
            src={item.logoUrl}
            alt={item.name}
            width={90}
            height={100}
            className="h-full w-full object-cover"
            priority={false}
            loading="lazy"
        />
    </li>
))}
            </ul>
        </div>
    );
});
