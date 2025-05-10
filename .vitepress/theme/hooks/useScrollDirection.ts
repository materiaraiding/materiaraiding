/**
 * Listens to the user's scroll direction, 
 * accepts a callback with a boolean of a downward scroll.
 * 
 * @param isMobile - Listen only during mobile widths (960px). False by default.
 */
export default function useScrollDirection(
  onDirectionChange: (isDown: boolean) => void,
  { isMobile = false }: { isMobile: boolean }
): void {
  let lastScrollY = 0;
  let scrolledDownFlag = false;

  const scrollListener = () => {
    const isScrollingDown = window.scrollY > lastScrollY;

    if (isScrollingDown !== scrolledDownFlag) {
      onDirectionChange(isScrollingDown);
      scrolledDownFlag = isScrollingDown;
    }

    lastScrollY = window.scrollY;
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