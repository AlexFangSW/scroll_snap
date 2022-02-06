let container = document.querySelector(".container");
let cards = document.querySelectorAll(".container div.box");
let focus = 0;
let error_range = 5; // error_range (PX)

// Set detection
let detect_snap = () => {
  // 這邊計算都是把Container 和其他東西脫離出來，不再和外面距離相關。
  let container_center =
    (container.getBoundingClientRect().right -
      container.getBoundingClientRect().left) /
    2;
  for (let i = 0; i < cards.length; i++) {
    let card_center =
      cards[i].getBoundingClientRect().left -
      container.getBoundingClientRect().left +
      (cards[i].getBoundingClientRect().right -
        cards[i].getBoundingClientRect().left) /
        2;
    if (
      card_center - container_center <= error_range &&
      card_center - container_center >= error_range * -1
    ) {
      if (i != focus) {
        cards[focus].classList.remove("focus");
        focus = i;
        cards[focus].classList.add("focus");
        // console.log(card_center - container_center);
      }
    }
  }
};
container.addEventListener("scroll", detect_snap);
