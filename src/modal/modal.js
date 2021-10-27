const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const message = `<p>Hello modal</p>`;
let isModalOpen = false;

const toggle = () => {
  isModalOpen = isModalOpen ? false : true;
  modal.innerHTML = isModalOpen ? message : "";
  btn.textContent = isModalOpen ? "Close" : "Open";
  isModalOpen
    ? document.addEventListener("keydown", onHandleEscapeClick)
    : document.removeEventListener("keydown", onHandleEscapeClick);
};

const onHandleEscapeClick = (event) => {
  if (event.code === "Escape") {
    toggle();
  }
};
btn.addEventListener("click", toggle);
