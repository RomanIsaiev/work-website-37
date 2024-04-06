import InfiniteMarquee from 'vanilla-infinite-marquee';

new InfiniteMarquee({
  element: '.marquee-container',
  speed: 25000,
  smoothEdges: false,
  direction: 'right',
  gap: '10px',
  duplicateCount: 1,
  fullContainer: true,
});
