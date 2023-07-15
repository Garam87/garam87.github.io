// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Arrow up 버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector(".arrow-up");
arrowUp.style.opacity = 0;
document.addEventListener("scroll", () => {
  if ((arrowUp.style.opacity = 0)) {
    arrowUp.style.opacity = 0.5 + window.scrollY / homeHeight;
  } else {
    arrowUp.style.opacity = 0 + window.scrollY / homeHeight;
  }
});
