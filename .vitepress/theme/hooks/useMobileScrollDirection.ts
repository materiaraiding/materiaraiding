/**
 * Listens to the user's scroll direction on mobile widths, 
 * accepts a callback with a boolean of a downward scroll.
 */
export default function useMobileScrollDirection(
  onDirectionChange: (isDown: boolean) => void
): void {
  let lastScrollY = 0;
  let navbarHidden = false;

  const scrollListener = () => {
    const isScrollingDown = window.scrollY > lastScrollY;

    if (isScrollingDown !== navbarHidden) {
      onDirectionChange(isScrollingDown);
      navbarHidden = isScrollingDown;
    }

    lastScrollY = window.scrollY;
  }

  const updateScrollListener = () => {
    if (window.innerWidth <= 960) {
      window.addEventListener('scroll', scrollListener);
    } else {
      window.removeEventListener('scroll', scrollListener);
    }
  }

  updateScrollListener();
  window.addEventListener('resize', updateScrollListener);
}