const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[className*="reveal-"]').forEach(function (r) {
  observer.observe(r);
});

const handleIntersect2 = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("barre-reveal");
      observer.unobserve(entry.target);
    }
  });
};

const observer2 = new IntersectionObserver(handleIntersect2, options);
document.querySelectorAll(".barre").forEach(function (r) {
  observer2.observe(r);
});
/* 
const linkRestauration = document.getElementById("link-restauration");
const linkDetente = document.getElementById("link-detente");
const section_restauration = document.getElementById("section-restauration");
const section_detente = document.getElementById("section-detente");

linkRestauration.addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    if (linkDetente.classList.contains("selected")) {
      linkDetente.classList.remove("selected");
      linkRestauration.classList.add("selected");
      section_detente.classList.remove("shown");
      section_restauration.classList.add("shown");
    }
  },
  false
);

linkDetente.addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    if (linkRestauration.classList.contains("selected")) {
      linkRestauration.classList.remove("selected");
      linkDetente.classList.add("selected");
      section_restauration.classList.remove("shown");
      section_detente.classList.add("shown");
    }
  },
  false
); */
