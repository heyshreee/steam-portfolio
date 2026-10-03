import React from 'react';
import anime from 'animejs';

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

export const WaterDropGrid: React.FC = () => {
  const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const dotElement = target.closest('[data-index]') as HTMLElement;
    if (!dotElement) return;
    const index = dotElement.dataset.index;
    if (index === undefined) return;

    // Trigger ripple stagger animation
    (anime as any)({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 250 },
        { value: 0, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 250 },
        { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: (anime as any).stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: Number(index),
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          key={`${i}-${j}`}
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-zinc-600"
          data-index={index}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-400 opacity-50 group-hover:from-indigo-500 group-hover:to-white pointer-events-none"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="absolute right-0 top-[50%] z-0 grid max-w-[75%] -translate-y-[50%] select-none pointer-events-auto"
    >
      {dots}
    </div>
  );
};
