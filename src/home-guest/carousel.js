document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const leftBtn = document.querySelector(".carousel-btn.left");
  const rightBtn = document.querySelector(".carousel-btn.right");
  const numVisible = 4;
  let autoplayInterval;

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

  const getSlideWidth = () => {
    const wrapper = track.querySelector(".img-wrapper");
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    return wrapper.offsetWidth + gap;
  };

  const scrollTo = (pos, smooth = true) => {
    track.style.scrollBehavior = smooth ? "smooth" : "auto";
    track.scrollLeft = pos;
    if (!smooth) {
      requestAnimationFrame(() => {
        track.style.scrollBehavior = "smooth";
      });
    }
  };

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

  const startAutoplay = () => {
    autoplayInterval = setInterval(() => {
      track.scrollLeft += getSlideWidth();
      requestAnimationFrame(resetIfNeeded);
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayInterval) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  };

  const restartAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  const initialize = () => {
    cloneSlides();
    scrollTo(getSlideWidth() * numVisible, false);
    startAutoplay();
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
    restartAutoplay();
  });

  rightBtn.addEventListener("click", () => {
    track.scrollLeft += getSlideWidth();
    requestAnimationFrame(resetIfNeeded);
    restartAutoplay();
  });

  track.addEventListener("scroll", () => {
    requestAnimationFrame(resetIfNeeded);
  });

  track.addEventListener("mouseenter", stopAutoplay);
  track.addEventListener("mouseleave", startAutoplay);
});
