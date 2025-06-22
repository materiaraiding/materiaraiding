/**
 * Listens to the user's scroll direction, 
 * accepts a callback with a boolean of a downward scroll.
 * 
 * Options:
 * @param isMobile - Listen only during mobile widths (960px). False by default.
 * @param pageTopTreshold - Sets a threshold scroll distance past the top of the page in order for the callback to occur. Zero by default.
 */
export default function useScrollDirection(
  onDirectionChange: (isDown: boolean) => void,
  options?: {
    isMobile?: boolean,
    pageTopThreshold?: number
  }
): void {
  const isMobile = options?.isMobile ?? false;
  const pageTopThreshold = options?.pageTopThreshold ?? 0;

  let lastScrollY = 0;
  let scrolledDownFlag = false;

  const scrollListener = () => {
    const newY = window.scrollY;
    const isScrollingDown = newY > lastScrollY && newY > pageTopThreshold;

    if (isScrollingDown !== scrolledDownFlag) {
      onDirectionChange(isScrollingDown);
      scrolledDownFlag = isScrollingDown;
    }

    lastScrollY = newY;
  }

  const updateScrollListener = () => {
    if (!isMobile || window.innerWidth <= 960) {
      window.addEventListener('scroll', scrollListener);
    } else {
      window.removeEventListener('scroll', scrollListener);
    }
  }

  updateScrollListener();
  window.addEventListener('resize', updateScrollListener);
}