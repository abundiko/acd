function loadJS() {
  // code for the image slider

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    let scroller = document.querySelectorAll(".sponsor_scroller");
    return scroller.forEach(scroll => {
      scroll.setAttribute("data-animated", true);

      let scroll_Inner = scroll.querySelector(".sponsor_images");
      let scroll_Innercontent = Array.from(scroll_Inner.children);

      scroll_Innercontent.forEach(item => {
        let duplicatedImages = item.cloneNode(true);

        duplicatedImages.setAttribute("aria-hidden", true);
        scroll_Inner.appendChild(duplicatedImages);
      });
    });
  }

  window.addEventListener("scroll", () => {
    let headerloop = document.querySelector("#head");
    if (headerloop) headerloop.classList.toggle("stick", scrollY > 40);
  });

  // accordion
  let menu = document.getElementById("mnu-btn");
  let act = (menu.onclick = () => {
    let result = document.querySelector(".accordion_menu");

    result.classList.toggle("active");

    let accordioncloser = document.querySelector("#accordionclose");

    let closeaccordion = (accordioncloser.onclick = () => {
      result.classList.remove("active");
    });

    // menuBtn.classList.remove("active")
  });

  let cross = document.querySelectorAll(".questions");
  cross.forEach(press => {
    let trigger = press.querySelector(".question_main");
    trigger.onclick = () => {
      press.classList.toggle("activated");
    };
  });

  let verify = document.querySelector("#mobileaccess");
  if (verify) {
    let mobileshow = verify.addEventListener("click", () => {
      let mobileresult = document.querySelector(".verify_mobile");
      mobileresult.classList.add("mobileactivate");

      let remover = document.querySelector("#mobilecloser");
      remover.addEventListener("click", () => {
        mobileresult.classList.remove("mobileactivate");
      });
    });
  }

  if (window.location.hash)
    (() => {
      document.querySelector(window.location.hash).scrollIntoView({
        behavior: "smooth"
      });
    })();
}

loadJS();
