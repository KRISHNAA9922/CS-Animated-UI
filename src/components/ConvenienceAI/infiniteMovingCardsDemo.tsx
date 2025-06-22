'use client';

import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export function InfiniteMovingCardsDemo({
    items,
    direction = 'up',
    speed = 'slow',
}: {
    items: { id: number; name: string; logoUrl: string }[];
    direction?: 'up' | 'down';
    speed?: 'fast' | 'normal' | 'slow';
}) {
    return (
        <div className=" rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={items} direction={direction} speed={speed} />
        </div>
    );
}
