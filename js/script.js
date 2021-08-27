"use strict";

// VARIABLES :
const navbar = document.getElementById("navbar");
const nav = document.querySelector(".links-div");
const navHeight = nav.getBoundingClientRect().height;

// FUNCTION :
// for checking if the size of the window is less than 815px (for the media-query change).
const checkSize = function () {
  // check window width < 815 px :
  if (window.innerWidth < 815) {
    // Function to apply sticky class :
    const stickyNav = function (entries) {
      console.log(entries);
      // Array of the entries :
      const [entry] = entries;
      console.log(entry);

      // Add sticky class if entry.isINtersecting is false :
      if (!entry.isIntersecting) nav.classList.add("sticky");
      // Add sticky class if entry.isINtersecting is true :
      else nav.classList.remove("sticky");
    };

    // navbarObserver defined :
    const navbarObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    // Call navbarObserver :
    navbarObserver.observe(navbar);
  }
};

// checkSize called for navbar to stick even when the page has not been resized :
checkSize();

// Event listener added so the checkSize can still be called after resize :
window.addEventListener("resize", checkSize);
