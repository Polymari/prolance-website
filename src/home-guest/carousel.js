document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const leftBtn = document.querySelector(".carousel-btn.left");
  const rightBtn = document.querySelector(".carousel-btn.right");
  const numVisible = 4;

  // Clone slides to enable infinite scroll
  const cloneSlides = () => {
    if (track.dataset.cloned) return;

    const items = [...track.children];
    const clonesBefore = items
      .slice(-numVisible)
      .map((el) => el.cloneNode(true))
      .reverse();
    const clonesAfter = items
      .slice(0, numVisible)
      .map((el) => el.cloneNode(true));

    clonesBefore.forEach((clone) => track.prepend(clone));
    clonesAfter.forEach((clone) => track.append(clone));

    track.dataset.cloned = "true";
  };

  // Get the full width (element + gap)
  const getSlideWidth = () => {
    const wrapper = track.querySelector(".img-wrapper");
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return wrapper.offsetWidth + gap;
  };

  // Scroll to a position with optional smoothness
  const scrollTo = (pos, smooth = true) => {
    track.style.scrollBehavior = smooth ? "smooth" : "auto";
    track.scrollLeft = pos;
    if (!smooth) {
      requestAnimationFrame(() => {
        track.style.scrollBehavior = "smooth";
      });
    }
  };

  // Reset scroll position if it's at the edge (looping logic)
  const resetIfNeeded = () => {
    const slideWidth = getSlideWidth();
    const realItemsCount = track.children.length - numVisible * 2;
    const scrollMin = 0;
    const scrollMax = slideWidth * (realItemsCount + numVisible);
    const buffer = 2;

    if (track.scrollLeft <= scrollMin + buffer) {
      track.style.scrollBehavior = "auto";
      track.scrollLeft = slideWidth * realItemsCount;
      requestAnimationFrame(() => {
        track.style.scrollBehavior = "smooth";
      });
    } else if (track.scrollLeft >= scrollMax - buffer) {
      track.style.scrollBehavior = "auto";
      track.scrollLeft = slideWidth * numVisible;
      requestAnimationFrame(() => {
        track.style.scrollBehavior = "smooth";
      });
    }
  };

  const initialize = () => {
    cloneSlides();
    scrollTo(getSlideWidth() * numVisible, false);
  };

  initialize();

  window.addEventListener("load", () => {
    scrollTo(getSlideWidth() * numVisible, false);
  });

  window.addEventListener("resize", () => {
    scrollTo(getSlideWidth() * numVisible, false);
  });

  leftBtn.addEventListener("click", () => {
    track.scrollLeft -= getSlideWidth();
    requestAnimationFrame(resetIfNeeded);
  });

  rightBtn.addEventListener("click", () => {
    track.scrollLeft += getSlideWidth();
    requestAnimationFrame(resetIfNeeded);
  });

  track.addEventListener("scroll", () => {
    requestAnimationFrame(resetIfNeeded);
  });
});
