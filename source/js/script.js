(function(){
  ["main-nav__toggle--nojs", "main-nav--nojs", "intro--nojs"].forEach((className) => {
    const elements = document.getElementsByClassName(className);

    for (const el of elements) {
      el.classList.remove(className);
    }
  });

  const button = document.querySelector(".main-nav__toggle");
  const mainNav = document.querySelector(".main-nav");

  button.addEventListener("click", () => {
    if (mainNav.classList.contains("main-nav--opened")) {
      mainNav.classList.remove("main-nav--opened")
      mainNav.classList.add("main-nav--closed");
    } else {
      mainNav.classList.remove("main-nav--closed")
      mainNav.classList.add("main-nav--opened");
    }
  });
})();
